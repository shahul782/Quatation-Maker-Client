import { useEffect, useMemo, useState } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'; 
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button, IconButton, TextField, Tooltip } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { GridDeleteIcon } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { API } from '../global';


//nested data is ok, see accessorKeys in ColumnDef below
const dataItems = [
  {
    product: "shirt",
    brand: '261 Erdman Ford',
    offer: 'East Daphne',
    size: 'Kentucky',
    shopName:"ABC"
  },
  {
    product: "shirt",
    brand: '261 Erdman Ford',
    offer: 'East Daphne',
    size: 'Kentucky',
    shopName:"ABC"
  },
  {
    product: "shirt",
    brand: '261 Erdman Ford',
    offer: 'East Daphne',
    size: 'Kentucky',
    shopName:"ABC"
  },
  {
    product: "shirt",
    brand: '261 Erdman Ford',
    offer: 'East Daphne',
    size: 'Kentucky',
    shopName:"ABC"
  },
  {
    product: "shirt",
    brand: '261 Erdman Ford',
    offer: 'East Daphne',
    size: 'Kentucky',
    shopName:"ABC"
  },
];

const Example = () => {
  const navigate = useNavigate();
  const {id}=useParams();
  // console.log(id);
  const [productList,setProductList]=useState();
  useEffect(()=>{
    fetch(`${API}/getproduct`,{
    method:"GET",
    headers:{
      'content-type':"application/json",
    }
    }).then((res)=>res.json()).then((r1)=>setProductList(r1)).catch((err)=>console.log(err));
  },[])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'product', //access nested data with dot notation
        header: 'Product',
        size: 150,
      },
      {
        accessorKey: 'brand',
        header: 'Brand',
        size: 150,
      },
      {
        accessorKey: 'offer', //normal accessorKey
        header: 'OFFER',
        size: 200,
      },
      {
        accessorKey: 'size',
        header: 'Size',
        size: 150,
      },
      {
        accessorKey: 'shopName',
        header: 'ShopName',
        size: 150,
      },
    ],
    [],
  );

  const data = productList ? productList : dataItems;
  const table = useMaterialReactTable({
    enableEditing: true,
    columns,
    data, 
    positionActionsColumn: 'last',
    renderRowActions: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip title="Delete">
            {/* <IconButton color="error" onClick={() => Navigate({row.original})}> */}
             <IconButton color="error"  onClick={() => navigate(`/navbar/deleteproduct/${row.original._id}`)}>
              <GridDeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            {/* <IconButton onClick={() => navigate(`/edit{row.original}`)}> */}
            <IconButton color="primary"  onClick={() => navigate(`/navbar/editproduct/${row.original._id}`)}>
              <EditIcon/>
            </IconButton>
          </Tooltip>
        </Box>
      ),
  });

  return (
  
  <>
  <Button type="button" color='primary' onClick={()=>navigate('/navbar/addproduct')} >   <PersonAddAltIcon/>AddProducts</Button>
  <MaterialReactTable table={table} />
  <Button color='primary' onClick={()=>navigate('/navbar/home')}>Back</Button>
  </>

  );
};

export default Example;
