import * as React from 'react';
import Box from '@mui/material/Box';
import CustomAppBar from './../../components/AppBar';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";

export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <Box>
            {/* App Bar Component */}
            <CustomAppBar />

            <Box sx={{display:'flex', justifyContent: 'center', mt: 10}}>
                <Stack>
                    <Typography
                        fontSize={50}
                        fontWeight={600}>
                        Welcome To StartUp Legal
                    </Typography>
                    <img
                        src={'/logo.png'}
                        alt={'welcome logo'}
                        style={{
                            height: '500px',
                            width: '100%'
                        }}
                    />
                </Stack>
            </Box>

            <footer
                style={{
                    backgroundColor: '#171d7a',
                    color: '#fff',
                    padding: '20px',
                }}
            >
                <Box display="flex" justifyContent="space-around" alignItems="flex-start" flexWrap="wrap">
                    {/* Quick Links */}
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>
                                <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/signup" style={{ color: '#fff', textDecoration: 'none' }}>
                                    SignUp
                                </a>
                            </li>
                            <li>
                                <a href="/login" style={{ color: '#fff', textDecoration: 'none' }}>
                                    Login
                                </a>
                            </li>
                        </ul>
                    </Box>

                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Contact Information
                        </Typography>
                        <Typography>123 Main Street</Typography>
                        <Typography>City, Country</Typography>
                        <Typography>Email: info@example.com</Typography>
                        <Typography>Phone: +1 (123) 456-7890</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body2">© {currentYear} StartUpLegal</Typography>
                    </Box>
                </Box>
            </footer>
        </Box>
    );
}
