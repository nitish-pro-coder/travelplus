import { TabContext, TabList, TabPanel } from '@mui/lab'
import {  Autocomplete, Card, CardContent, IconButton, Tab, TableFooter, TablePagination, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import SearchIcon from '@mui/icons-material/Search';
import { ExcelRenderer } from 'react-excel-renderer';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
import { Snackbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const StyledDataGrid = styled(DataGrid)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); /* Add box shadow effect */
  margin-bottom: 15px; /* Increase spacing between the table and other elements */
  border: 1px solid rgba(224, 224, 224, 1); /* Add border to the table */
  border-radius: 4px; /* Add border radius to the table */
`;

export default function Settings() {
    const [value, setValue] = React.useState('1');
    const [value1, setValue1] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const handleChange1 = (event, newValue) => {
        setValue1(newValue);
      }
      const [text, setText] = React.useState('');
      const options = ['Option 1', 'Option 2', 'Option 3'];

      
    
      const handleChangeText = (event) => {
        setText(event.target.value);
      };
      const [rows, setRows] = React.useState(['gmail.com', 'hummingbird.com']);
      const [adminrows, setadminRows] = React.useState(['Ram','kumar']);
      const [departmentrows, setdepartmentRows] = React.useState(['Finanace','HR']);

    
    
      const handleTextChange = (index, value) => {
        // Update the value of a specific row
        const updatedRows = [...rows];
        updatedRows[index] = value;
        setRows(updatedRows);
      };
    
      const handleDeleteRow = (index) => {
        // Delete a specific row
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
      };

      const handleTextChangeAdmin = (index, value) => {
        const updatedRows = [...rows];
        updatedRows[index] = value;
        setRows(updatedRows);
      };
      const handleTextChangedepartment = (index, value) => {
        const updatedRows = [...departmentrows];
        updatedRows[index] = value;
        setdepartmentRows(updatedRows);
      };
      const handleAddRow = () => {
        setRows([...rows,'']);
      };
      const handleAdminAddRow = () => {
        setadminRows([...adminrows, '']);
      };

      const handleDepartmentAddRow = () => {
        setdepartmentRows([...departmentrows, '']);
      };
    

      const handleAdminDeleteRow = (index) => {
        const updatedRows = [...adminrows];
        updatedRows.splice(index, 1);
        setadminRows(updatedRows);
      };

      const handleDepartmentDeleteRow = (index) => {
        const updatedRows = [...departmentrows];
        updatedRows.splice(index, 1);
        setdepartmentRows(updatedRows);
      };
    
     
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const employees = [
        {
          id: 1,
          details: 'Employee 1 details',
          designation: 'Designation 1',
          travelPolicy: 'Travel policy 1',
          manager: 'Manager 1',
          actions: 'Actions 1',
        },
        // Add more employees here
      ];
    
      const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, employees.length - page * rowsPerPage);



        const handleFileUpload = (event) => {
          const fileObj = event.target.files[0];
          ExcelRenderer(fileObj, (err, response) => {
            if (err) {
              console.log(err);
            } else {
              const { rows, cols } = response;
              console.log(rows); // Array of rows from the Excel file
              console.log(cols); // Array of columns from the Excel file
              setadminRows(rows.length===0)
            }
          });
        };
        
        const [open, setOpen] = React.useState(false);
        const [formData, setFormData] = React.useState({
          state: '',
          entityName: '',
          gstin: '',
          pincode: '',
          address1: '',
          address2: '',
        });
        const [userrows, setuserRows] = React.useState([
          {
            id: 1,
            'Entity Name': 'Company A',
            State: 'State A',
            GSTIN: 'GSTIN A',
            'Address 1': 'Address 1 A',
          'Address 2': 'Address 2 A',
            Pincode: 'Pincode A',
      
          },
          {
            id: 2,
            'Entity Name': 'Company B',
            State: 'State B',
            GSTIN: 'GSTIN B',
            'Address 1': 'Address 1 B',
          'Address 2': 'Address 2 B',
            Pincode: 'Pincode B',
          },
          {
            id: 3,
            'Entity Name': 'Company C',
            State: 'State C',
            GSTIN: 'GSTIN C',
            'Address 1': 'Address 1 C',
          'Address 2': 'Address 2 C',
            Pincode: 'Pincode C',
          },
        ]);
      
        const columns = [
          { field: 'Entity Name', headerName: 'Entity Name', width: 100 },
          { field: 'State', headerName: 'State', width: 100 },
          { field: 'GSTIN', headerName: 'GSTIN', width: 100 },
          { field: 'Address 1', headerName: 'Address 1', width: 100 },
          { field: 'Address 2', headerName: 'Address 2', width: 100 },
          { field: 'Pincode', headerName: 'Pincode', width: 110 },
          {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
              const handleEdit = () => {
                const rowIndex = params.api.getRowIndex(params.id);
                const rowData = params.api.getRowNode(params.id).data;
                setOpen(true);
                setFormData({
                  state: rowData.State,
                  entityName: rowData['Entity Name'],
                  gstin: rowData.GSTIN,
                  pincode: rowData.Pincode,
                  address1: rowData['Address 1'],
                  address2: rowData['Address 2'],
                });
                setEditingRowIndex(rowIndex); // Add this line to store the index of the editing row
              };
        
              return (
                <button onClick={handleEdit} className="edit-button">
                  Edit
                </button>
              );
            },
          },
        ];
            
              
        const [editingRowIndex, setEditingRowIndex] = React.useState(null);
        const handleClickOpen = () => {
          setOpen(true);
          setFormData({
            state: '',
            entityName: '',
            gstin: '',
            pincode: '',
            address1: '',
            address2: '',
          });
          setEditingRowIndex(null); // Reset the editing row index
        };
        
      
        const handleClose = () => {
          setOpen(false);
        };
      
        const handleInputChange = (event) => {
          const { id, value } = event.target;
        
          if (id === 'pincode' && isNaN(value)) {
            event.preventDefault();
            event.stopPropagation();
            event.target.value = formData.pincode; // Revert the input value to the previous pincode value
          } else {
            setFormData((prevData) => ({
              ...prevData,
              [id]: value,
              [`${id}Error`]: '',
            }));
          }
        };
        const handleSave = () => {
          let hasError = false;
      
          if (!formData.state) {
            setFormData((prevData) => ({
              ...prevData,
              stateError: "State is mandatory",
            }));
            hasError = true;
          } else {
            setFormData((prevData) => ({
              ...prevData,
              stateError: "",
            }));
          }
        if (!formData.entityName) {
          setFormData((prevData) => ({
            ...prevData,
            entityNameError: "Entity-Name is mandatory",
          }));
          hasError = true;
        } else {
          setFormData((prevData) => ({
            ...prevData,
            entityNameError: "",
          }));
        }
      
        if (!formData.gstin) {
        setFormData((prevData) => ({
          ...prevData,
          gstError: "GSTIN is mandatory",
        }));
        hasError = true; 
      }else {
        setFormData((prevData) => ({
          ...prevData,
          gstError: "",
        }));
      }
      
      if (!formData.pincode) {
        setFormData((prevData) => ({
          ...prevData,
          pinError: "Pincode is mandatory",
        }));
        hasError = true; 
      }else {
        setFormData((prevData) => ({
          ...prevData,
          pinError: "",
        }));
      }
      
      if (!formData.address1) {
        setFormData((prevData) => ({
          ...prevData,
          add1Error: "Address 1 is mandatory",
        }));
        hasError = true; 
      }else {
        setFormData((prevData) => ({
          ...prevData,
          add1Error: "",
        }));
      }
      
      if (!formData.address2) {
        setFormData((prevData) => ({
          ...prevData,
          add2Error: "Address 2 is mandatory",
        }));
        hasError = true; 
      }else {
        setFormData((prevData) => ({
          ...prevData,
          add2Error: "",
        }));
      }
         
          if (hasError) {
            return;
          }
      
      
          if (editingRowIndex !== null) {
            const updatedRows = [...rows];
            updatedRows[editingRowIndex] = {
              id: rows[editingRowIndex].id,
              'Entity Name': formData.entityName,
              State: formData.state,
              GSTIN: formData.gstin,
              'Address 1': formData.address1,
            'Address 2': formData.address2,
              Pincode: formData.pincode,
            };
            setRows(updatedRows);
            setEditingRowIndex(null); // Reset the editing row index
          } else {
            const newId = rows.length + 1;
            const newRow = {
              id: newId,
              'Entity Name': formData.entityName,
              State: formData.state,
              GSTIN: formData.gstin,
              'Address 1': formData.address1,
              'Address 2': formData.address2,
              Pincode: formData.pincode,
            };
            setRows((prevRows) => [...prevRows, newRow]);
          }
        
          setOpen(false);
          handleSnackbarOpen();
          setFormData({
            state: '',
            entityName: '',
            gstin: '',
            pincode: '',
            address1: '',
            address2: '',
          });
        };
        
      
        const [indianStates, setIndianStates] = React.useState([]);
      
        const [snackbarOpen, setSnackbarOpen] = React.useState(false);
      
        const handleSnackbarOpen = () => {
          setSnackbarOpen(true);
        };
      
        const handleSnackbarClose = () => {
          setSnackbarOpen(false);
        };
      
        React.useEffect(() => {
          axios.post('http://localhost:3000/api/hbstateselect/')
            .then((response) => {
              console.log(response.status, response.data);
               setIndianStates(response.data);
            })
            .catch((error) => {
              console.error('Error fetching Indian states:', error);
            });
        }, []);
      
        
      
        const handleStateChange = (event) => {
          const { value } = event.target;
          setFormData((prevData) => ({
            ...prevData,
            state: value,
          }));
        };

        
  return (
    <>
    <Navbar/>
   
    <div className='container d-flex innercontainer'>
        <TabContext value={value}>
    <TabList
      onChange={handleChange}
      aria-label="lab API tabs example"
      orientation="vertical"
      
    >
      {/* <Card> */}
        {/* <CardContent> */}
<Tab label="GENERAL SETTINGS" className='tablist' value="1" />
      <Tab label="Users" className='tablist' value="2" />
      <Tab label="Manage GST" className='tablist' value="3" />
        {/* </CardContent> */}
      {/* </Card> */}
      
    </TabList>
    <div>
      <TabPanel value="1" className='ps-5' >
        <h5>GENERAL SETTINGS</h5>
        <Card className='mt-3'>
            <CardContent>
        <Card className='mt-2'>
            
            <CardContent>
            <h5>Whitelisted email domains</h5> 
            <p>Email IDs with whitelisted official domains allowed for platform login</p>
            <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email Domains</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  value={row}
                  onChange={(e) => handleTextChange(index, e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleDeleteRow(index)}>
                  <DeleteIcon className="delete-icon" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <Button className='btnbg mt-2'  variant="contained" onClick={handleAddRow}>
        Add 
      </Button>
        </CardContent>
                
        </Card>
        <Card className='mt-2' >
            <CardContent>
            <h5>Admin</h5> 
            <p>Email IDs with whitelisted official domains allowed for platform login</p>
            <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Admins</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {adminrows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row}
                    onChange={(e) => handleTextChangeAdmin(index, e.target.value)}
                    variant="outlined"
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleAdminDeleteRow(index)}>
                  <DeleteIcon className="delete-icon" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button className='btnbg mt-2' variant="contained" onClick={handleAdminAddRow}>
        Add
      </Button>
      <input type="file" onChange={handleFileUpload} />
      

        </CardContent>
                
        </Card>
        <Card className='mt-2'>
            <CardContent>
            <h5>Department</h5> 
            <p>Enter list of designations in your organization</p>
            <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Departments</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {departmentrows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row}
                    onChange={(e) => handleTextChangedepartment(index, e.target.value)}
                    variant="outlined"
                    sx={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDepartmentDeleteRow(index)}>
                  <DeleteIcon className="delete-icon" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button className='btnbg mt-2' variant="contained" onClick={handleDepartmentAddRow}>
        Add
      </Button>

      

        </CardContent>
                
        </Card>
        </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value="2">
        <h5 className=''>USERS</h5>
        <Card className='mt-3'>
            <CardContent >
            <TabContext value={value1}>

<TabList
  onChange={handleChange1}
  aria-label="lab API tabs example"
>

  <Tab label="Onboarded" value="1" />
  <Tab label="In Queue" value="2" />
  <Tab label="Invited" value="3" />

 
  
</TabList>
    <TabPanel value="1" className='ps-5' >
      <div className='row'>
        <div className='col-6 pb-4'>
    <Autocomplete
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            placeholder='Search by Employee name,official email ID'
            size="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: <SearchIcon />,
            }}
          />
        )}
      />
      </div>
      <div className='col-4 pb-4'>
    <Autocomplete
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            size="small"
            placeholder='Select Department'
            InputProps={{
              ...params.InputProps,
              endAdornment: <SearchIcon />,
            }}
          />
        )}
      />
      </div>
      </div>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee details</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Travel policy</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Display the employees based on the current page and rowsPerPage */}
          {(rowsPerPage > 0
            ? employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : employees
          ).map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.details}</TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>{employee.travelPolicy}</TableCell>
              <TableCell>{employee.manager}</TableCell>
              <TableCell>{employee.actions}</TableCell>
            </TableRow>
          ))}

          {/* Render empty rows if needed */}
          {emptyRows > 0 && (
            <TableRow style={{ height: 23 * emptyRows }}>
              <TableCell colSpan={5} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={5}
              count={employees.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>

    </TabPanel>
    <TabPanel value="2" className='ps-5 '  >
        <h5>In Queue</h5>
      
        
    </TabPanel>
    <TabPanel value="3" className='ps-5 ' >
        <h5>In Queue</h5>
    </TabPanel>
</TabContext>

            </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value="3">
      <div>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        GST
      </Typography>
    <div style={{ position: 'relative' }}>
      <Button variant="outlined" id="agst" onClick={handleClickOpen}
      style={{ position: 'absolute', top: '-75px', right: '20px' }}>
        Add GST
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add GST</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the following information to add GST:
          </DialogContentText>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              select
              margin="dense"
              id="state"
              label="State"
              fullWidth
              variant="outlined"
              value={formData.state}
              onChange={handleStateChange}
              required // Added required attribute
              error={!!formData.stateError} // Set the error prop based on the error state
              helperText={formData.stateError}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: '415px', // Adjust the maximum height of the dropdown menu
                    },
                  },
                },
              }}
              
            >
                        
    {indianStates.map((state,i) => (
       <MenuItem key={i} value={state.StateName}>
       {state.StateName}
     </MenuItem>
   ))}
              
            </TextField>
            <TextField
              margin="dense"
              id="entityName"
              label="Entity Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.entityName}
              onChange={handleInputChange}
              required // Added required attribute
              error={!!formData.entityNameError} // Set the error prop based on the error state
  helperText={formData.entityNameError}
            />
            <TextField
              margin="dense"
              id="gstin"
              label="GSTIN"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.gstin}
              onChange={handleInputChange}
              required // Added required attribute
              error={!!formData.gstError} // Set the error prop based on the error state
  helperText={formData.gstError}
            />
            <TextField
              margin="dense"
              id="pincode"
              label="Pincode"
              type="number"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input pattern
              fullWidth
              variant="outlined"
              value={formData.pincode}
              onChange={handleInputChange}
              required // Added required attribute
              error={!!formData.pinError} // Set the error prop based on the error state
              helperText={formData.pinError}
            />
            <TextField
              margin="dense"
              id="address1"
              label="Address 1"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.address1}
              onChange={handleInputChange}
              required // Added required attribute
              error={!!formData.add1Error} // Set the error prop based on the error state
              helperText={formData.add1Error}
            />
            <TextField
              margin="dense"
              id="address2"
              label="Address 2"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.address2}
              onChange={handleInputChange}
              required // Added required attribute
              error={!!formData.add2Error} // Set the error prop based on the error state
              helperText={formData.add2Error}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={handleClose}
              id="cancelb"
              variant="outlined"
              sx={{ marginRight: '40px', marginBottom: '20px' }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              id="addb"
              variant="contained"
              sx={{ marginRight: '85px', marginBottom: '20px' }}
            >
              Save
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '90px',height: '400px',overflowY: 'auto' }}>
      <div style={{ height: '100%', width: '51%', marginBottom: '10px' }}>
      <ThemeProvider
            theme={(theme) =>
              createTheme({
                ...theme,
                components: {
                  MuiDataGrid: {
                    styleOverrides: {
                      root: {
                        '& .MuiDataGrid-colCellTitle': {
                          padding: '0.5rem 1rem', // Increase spacing between columns
                        },
                      },
                    },
                  },
                },
              })
            }
          >
            <StyledDataGrid rows={rows} columns={columns} pageSize={10} autoHeight />
          </ThemeProvider>
        
      </div>
      </Box>
    </div>
    <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={handleSnackbarClose}
        message="GST Saved Successfully!"
      />
    </div>
      </TabPanel>
    </div>
  
</TabContext>

      
    </div>
    </>
  )
}
