import { useEffect, useMemo } from 'react';
 import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'; 
import {
  MaterialReactTable,
  useMaterialReactTable,MRT_Table, MRT_TablePagination 
} from 'material-react-table';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Box, Button, Icon, IconButton, Tooltip } from '@mui/material';
import { GridDeleteIcon } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from '../global';

const dataList = [
  {
    name: "king",  
    address: '2/42 Thiyagadurgam',
    city: 'kallakurchi',
    state: 'Tamil Nadu',
  },
  {
    name: "jhon",
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: "doe",
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: "kelvi",
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: "miller",
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];

const Vendor = () => {
  const {id}=useParams();
  const [vendorList,setvendorList] = useState()
  console.log(vendorList)
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/getvendor`, {
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
        }
    }).then((res) => res.json())
        .then((data) => {console.log(data);
          setvendorList(data)}).catch((error) => console.log(error))
}, [])
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'vendorName', //access nested data with dot notation
        header: 'vendorName',
        size: 150,
      },
      {
        accessorKey: 'Idproof', //access nested data with dot notation
        header: 'Idproof',
        size: 150,
      },
      {
        accessorKey: 'IdproofNum', //access nested data with dot notation
        header: 'IdproofNum',
        size: 150,
      },
      {
        accessorKey: 'city',
        header: 'city',
        size: 150,
      },
      {
        accessorKey: 'contact', //normal accessorKey
        header: 'contact',
        size: 200,
      }
     
     
    ],
    [],
  );
  const data = vendorList ? vendorList : dataList;
  const table = useMaterialReactTable({
    enableEditing: true,
    columns,
    data, 
    enableEditing:true,
    positionActionsColumn: 'last',
    renderRowActions: ({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip title="Delete">
            {/* <IconButton color="error" onClick={() => Navigate({row.original})}> */}
             <IconButton color="error" onClick={() => navigate(`/navbar/deletevendor/${row.original._id}`)}>
              <GridDeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            {/* <IconButton onClick={() => navigate(`/edit{row.original}`)}> */}
            <IconButton color="primary"  onClick={() => navigate(`/navbar/editvendor/${row.original._id}`)}>
              <EditIcon/>
            </IconButton>
          </Tooltip>
        </Box>
      ),
     
    
  
         });

  return( 
    <>
     
    <Button type="button" color='primary' onClick={()=>navigate('/navbar/addvendor')} >   <PersonAddAltIcon/>Addvendor</Button>
  
    <div>
     
      { vendorList ?
  <MaterialReactTable table={table} />
  : <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>


      }   
  </div>
  <div>
  <Button color='primary' onClick={()=>navigate('/navbar/home')}>Back</Button>
  </div>
  </>

  )
};

export default Vendor;
