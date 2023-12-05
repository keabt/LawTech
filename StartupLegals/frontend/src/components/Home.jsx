import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import {
    Button,
    CardContent,
    CardHeader,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl,
    InputLabel,
    Menu,
    MenuItem, Select
} from "@mui/material";
import {Icon} from "@iconify/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {contracts} from "../utils/contracts";
import ContractStickyTable from "./ContractStickyTable";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorGroupBy, setAnchorGroupBy] = useState(null)
    const [openFilterDialog, setOpenFilterDialog] = useState(false)
    const [filterDate, setFilterDate] = useState(new Date());

    const handleClickFilterDialog = () => setOpenFilterDialog(true)
    const handleCloseFilterDialog = () => setOpenFilterDialog(false);

    const handleSortingMenuClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleGroupByOpen = event => {
        setAnchorGroupBy(event.currentTarget)
    }

    const handleSortingClose = () => {
        setAnchorEl(null)
    }

    const handleGroupByClose = () =>{
        setAnchorGroupBy(null);
    }

    const contractStatus = [
        {
            label:'Pending',
            value:'pending'
        },
        {
            label:'Approved',
            value:'approved'
        }

    ]
    return (
        <Grid item xs={12}>
            <Paper>
                <Card>
                    <CardHeader
                        title={<Typography variant={'h4'}>Filtering, Finding and Sorting</Typography>}
                        subheader={<Typography variant='subtitle2'>Find Your Specific Contract From Here...</Typography> }
                    />

                    <CardContent>
                        <Box sx={{display:'flex', gap:4}}>
                            <Button onClick={handleSortingMenuClick} variant={'contained'} startIcon={<Icon icon={'tabler:arrows-sort'} /> }>Sorting</Button>
                            <Button onClick={handleGroupByOpen} variant={'contained'} startIcon={<Icon icon={'tabler:box-multiple'} /> }>Group By</Button>
                            <Button onClick={handleClickFilterDialog} variant={'contained'} startIcon={<Icon icon={'tabler:adjustments-alt'} /> }>Filtering</Button>

                        </Box>

                        {/*sorting menu*/}
                        <Menu
                            keepMounted
                            elevation={0}
                            anchorEl={anchorEl}
                            id='customized-menu'
                            onClose={handleSortingClose}
                            open={Boolean(anchorEl)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <Icon icon='tabler:sort-ascending-2' fontSize={20} />
                                </ListItemIcon>
                                <ListItemText primary='Ascending' />
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Icon icon='tabler:sort-descending-2' fontSize={20} />
                                </ListItemIcon>
                                <ListItemText primary='Descending' />
                            </MenuItem>
                        </Menu>

                        {/*Group By Menu*/}
                        <Menu
                            keepMounted
                            elevation={0}
                            anchorEl={anchorGroupBy}
                            id='customized-menu'
                            onClose={handleGroupByClose}
                            open={Boolean(anchorGroupBy)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <Icon icon='tabler:calendar-due' fontSize={20} />
                                </ListItemIcon>
                                <ListItemText primary='By Date' />
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Icon icon='tabler:brand-redux' fontSize={20} />
                                </ListItemIcon>
                                <ListItemText primary='By Contract Status' />
                            </MenuItem>
                        </Menu>

                        {/*filter dialog*/}
                        <Dialog fullWidth open={openFilterDialog} onClose={handleCloseFilterDialog} aria-labelledby='form-dialog-title'>
                            <DialogTitle id='form-dialog-title'>Filter Contract</DialogTitle>
                            <DialogContent>
                                <DialogContentText sx={{ mb: 3 }}>
                                    There are two options to filter out, filter by date and filter by contract status,
                                    click on either of both and start filtering
                                </DialogContentText>

                                <DialogContent>
                                    <Grid container spacing={6}>
                                        <Grid item xs={6}>
                                            <Box sx={{display:'flex'}}>
                                                <FormControl fullWidth size={'small'}>
                                                    <InputLabel id='select-status'>Select Status</InputLabel>
                                                    <Select
                                                        label='Contract Status'
                                                        defaultValue=''
                                                        id='demo-simple-select-outlined'
                                                        labelId='select-status'
                                                    >
                                                        {
                                                            contractStatus.map((status)=>(<MenuItem
                                                                key={status.value}
                                                                value={status.value}>{status.label}</MenuItem> ))
                                                        }
                                                        <MenuItem value={10}></MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box >
                                                <DatePicker
                                                    wrapperClassName={`datePicker `}
                                                    width={'medium'}
                                                    selected={filterDate}
                                                    onChange={(date) => setFilterDate(date)} />
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </DialogContent>

                            </DialogContent>
                            <DialogActions className='dialog-actions-dense'>
                                <Button
                                    onClick={handleCloseFilterDialog}
                                    sx={{backgroundColor: 'primary.main', color:'white', '&:hover':{
                                            backgroundColor:'primary.light'
                                        }
                                    }}>Filter</Button>
                                <Button
                                    onClick={handleCloseFilterDialog}
                                    sx={{backgroundColor: 'primary.main', color:'white', '&:hover': {
                                            backgroundColor: "primary.light",
                                        }}}
                                    startIcon={<Icon icon={'tabler:x'} />}>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>


                    </CardContent>
                </Card>
            </Paper>

            <Paper sx={{mt:4}}>
                {contracts.length === 0 ? <Card sx={{p: 10}}>
                        <Typography align={'center'}>No Contracts to Show</Typography>
                    </Card> :
                    <Card>
                        <CardHeader title='Contract List' />
                        <ContractStickyTable />
                    </Card>}
            </Paper>
        </Grid>
    );
}

export default Home;