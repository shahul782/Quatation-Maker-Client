import { useEffect, useMemo, useState } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'; 
import Icon from '@mui/material/Icon';
import { Button } from '@mui/material'
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import './quotation.css'
import React from 'react';
import { Link,navigate,useNavigate, useParams } from "react-router-dom";
import { Box, IconButton, Tooltip } from '@mui/material';
import { GridDeleteIcon } from '@mui/x-data-grid';
import { API } from '../global';
const data1 = [

    {
        name: "Airtel",
        product: "sim",
        city: " banglore",
        contact: "9867453243"
    },
    {
        name: "Bike",
        product: "chains",
        city: " chennai",
        contact: "8945324378"

    },
    {
        name: "Nissan",
        product: "chase",
        city: "trichy",
        contact: "8965473254"

    },
    {
        name: "Toyato",
        product: "engine",
        city: "chennai",
        contact: "8970123579"
 

    },
    // {
    //     _id: "65e46f08c635158508084a85",
    //     name: "shoukath",
    //     product: "mobile",
    //     city: "vpm",
    //     contact: "9677705312",
    //     __v: 0
    // }

]

const Quotation = () => {
    const navigate = useNavigate();
    const {_id} = useParams()
    const [quatation, setQuatation] = useState()
    console.log(quatation)
    // get vendor fetch api call

    useEffect(() => {
        fetch(`${API}/getquatation`, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
            .then((data) => setQuatation(data)).catch((error) => console.log(error))
    }, [])

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', 
                header: 'CustomerName',
                size: 150,
            },
            {
                accessorKey: 'product', 
                header: 'product',
                size: 150,
            },
            {
                accessorKey: 'quantity', 
                header: 'Quantity',
                size: 150,
            },
            {
                accessorKey: 'price', 
                header: 'Price',
                size: 150,
            },
            {
              accessorKey: 'city', 
              header: 'City',
              size: 150,
          },
          {
            accessorKey: 'contact', 
            header: 'contact',
            size: 150,
        }


        ]
    )
  
    const data = quatation? quatation : data1 
    const table = useMaterialReactTable({data, columns,   enableEditing: true, enableDeleting:true,
        editDisplayMode: 'modal', 
        positionActionsColumn: 'last',
        renderRowActions: ({ row }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Tooltip title="Edit">
              <IconButton color="primary"  onClick={() => navigate(`/navbar/edit/${row.original._id}`)}>
              {/* <IconButton color="primary"  onClick={() => console.log(row.original._id)}> */}

                <Icon>edit</Icon>
                </IconButton>
              </Tooltip>
                <Tooltip title="Delete">
                <IconButton color="error" onClick={() => navigate(`/navbar/deletequatation/${row.original._id}`)}>
                  <GridDeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
            
          ),
        renderEditRowDialogContent: ({ internalEditComponents, row, table }) => {
            navigate(`/navbar/edit/${row.original._id}`)
            console.log(row.original._id)
            //optionally, completely override the render of the dialog content
            //use `internalEditComponents` to render the generated text fields, or completely render your own form and inputs
          }, })
    return (
        <div>
          
        {quatation ? 
        <div>
 <Button color='primary' onClick={()=>navigate('/navbar/addquotation')} >   <PersonAddAltIcon/>AddQuatation</Button>
           {/* /\  <MaterialReactTable data={quatation} columns={columns} enableEditing={true} editDisplayMode='custom' options={{padding:'dense'}} ColumnActionsIndex={-1} /> */}
          <MaterialReactTable table={table} />
          <Button color='primary'  onClick={()=>navigate('/navbar/home')}>Back</Button>
          </div>

        : 
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
      </div>
    )
}

export default Quotation