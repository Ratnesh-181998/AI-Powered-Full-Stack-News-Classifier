import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import {
    AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent,
    Chip, Grid, TextField, InputAdornment, Stack, Paper, Tabs, Tab,
    IconButton, Avatar, Badge, List, ListItem, ListItemIcon, ListItemText, Divider,
    Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Switch
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import NotificationsIcon from '@mui/icons-material/Notifications'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import PsychologyIcon from '@mui/icons-material/Psychology'
import CloudIcon from '@mui/icons-material/Cloud'
import BuildIcon from '@mui/icons-material/Build'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CloseIcon from '@mui/icons-material/Close'
import ShareIcon from '@mui/icons-material/Share'
import axios from 'axios'

// API Base URL - uses environment variable in production, localhost in development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

function NotificationsPage() {
    const allNotifications = [
        { id: 1, text: "New AI model 'GPT-5' released", time: "2 min ago", read: false, type: "tech" },
        { id: 2, text: "Market alert: Tech stocks up 5%", time: "1 hour ago", read: false, type: "business" },
        { id: 3, text: "Your weekly digest is ready", time: "5 hours ago", read: true, type: "system" },
        { id: 4, text: "Security alert: New login from Chrome", time: "1 day ago", read: true, type: "security" },
        { id: 5, text: "Welcome to FlipItNews Advanced!", time: "2 days ago", read: true, type: "system" },
    ]

    return (
        <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 4 }}>
            <Container maxWidth="md">
                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 4 }}>
                    🔔 Notifications
                </Typography>
                <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                    <List sx={{ p: 0 }}>
                        {allNotifications.map((notification, index) => (
                            <div key={notification.id}>
                                <ListItem
                                    alignItems="flex-start"
                                    sx={{
                                        bgcolor: notification.read ? 'transparent' : '#f0f7ff',
                                        transition: 'background-color 0.2s',
                                        '&:hover': { bgcolor: '#f5f5f5' },
                                        py: 2
                                    }}
                                >
                                    <ListItemIcon>
                                        <Avatar sx={{
                                            bgcolor: notification.read ? '#e0e0e0' : '#667eea',
                                            color: 'white'
                                        }}>
                                            <NotificationsIcon />
                                        </Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="subtitle1" fontWeight={notification.read ? 400 : 700}>
                                                {notification.text}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                                {notification.time} • {notification.type.toUpperCase()}
                                            </Typography>
                                        }
                                    />
                                    {!notification.read && (
                                        <Chip label="NEW" size="small" color="primary" sx={{ height: 20, fontSize: '0.7rem' }} />
                                    )}
                                </ListItem>
                                {index < allNotifications.length - 1 && <Divider component="li" />}
                            </div>
                        ))}
                    </List>
                </Paper>
            </Container>
        </Box>
    )
}

function ProfilePage() {
    return (
        <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 4 }}>
            <Container maxWidth="md">
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                    <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: '#764ba2', fontSize: '3rem' }}>U</Avatar>
                    <Typography variant="h4" fontWeight={700} gutterBottom>User Profile</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Welcome to your profile settings. Here you can manage your account preferences.
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Username" defaultValue="User1" InputProps={{ readOnly: true }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Email" defaultValue="user@flipitnews.com" InputProps={{ readOnly: true }} />
                        </Grid>
                    </Grid>
                    <Button variant="contained" sx={{ mt: 4, bgcolor: '#764ba2' }}>Edit Profile</Button>
                </Paper>
            </Container>
        </Box>
    )
}

function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false)
    const [emailNotifs, setEmailNotifs] = useState(true)
    const [marketingEmails, setMarketingEmails] = useState(false)

    return (
        <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 4 }}>
            <Container maxWidth="md">
                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 4 }}>
                    ⚙️ Settings
                </Typography>
                <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                    <List sx={{ p: 0 }}>
                        <ListItem sx={{ py: 3, px: 4 }}>
                            <ListItemIcon>
                                <AutoAwesomeIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="h6">Appearance</Typography>}
                                secondary="Customize the look and feel of the application"
                            />
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ py: 2, px: 4 }}>
                            <ListItemText primary="Dark Mode" secondary="Switch between light and dark themes" />
                            <Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem sx={{ py: 3, px: 4, mt: 2 }}>
                            <ListItemIcon>
                                <NotificationsIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="h6">Notifications</Typography>}
                                secondary="Manage your email and push notification preferences"
                            />
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ py: 2, px: 4 }}>
                            <ListItemText primary="Email Notifications" secondary="Receive daily digests and important alerts" />
                            <Switch checked={emailNotifs} onChange={(e) => setEmailNotifs(e.target.checked)} />
                        </ListItem>
                        <ListItem sx={{ py: 2, px: 4 }}>
                            <ListItemText primary="Marketing Emails" secondary="Receive offers and promotions" />
                            <Switch checked={marketingEmails} onChange={(e) => setMarketingEmails(e.target.checked)} />
                        </ListItem>

                        <Box sx={{ p: 4, textAlign: 'right' }}>
                            <Button variant="contained" sx={{ bgcolor: '#764ba2' }}>Save Changes</Button>
                        </Box>
                    </List>
                </Paper>
            </Container>
        </Box>
    )
}

function LoginPage() {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
            <Container maxWidth="xs">
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3
                    }}>
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                        Sign in to continue to FlipItNews Advanced
                    </Typography>

                    <TextField fullWidth label="Email Address" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Password" type="password" variant="outlined" sx={{ mb: 3 }} />

                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                            bgcolor: '#764ba2',
                            py: 1.5,
                            fontWeight: 700,
                            mb: 2,
                            '&:hover': { bgcolor: '#667eea' }
                        }}
                    >
                        Sign In
                    </Button>
                    <Typography variant="body2">
                        Don't have an account? <Link to="#" style={{ color: '#764ba2', fontWeight: 600 }}>Sign Up</Link>
                    </Typography>
                </Paper>
            </Container>
        </Box>
    )
}

function NavBar() {
    const location = useLocation()
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)
    const open = Boolean(anchorEl)
    const openUser = Boolean(anchorElUser)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const isActive = (path) => location.pathname === path

    const notifications = [
        { id: 1, text: "New AI model 'GPT-5' released", time: "2 min ago", read: false },
        { id: 2, text: "Market alert: Tech stocks up 5%", time: "1 hour ago", read: false },
        { id: 3, text: "Your weekly digest is ready", time: "5 hours ago", read: true },
    ]

    // Hide NavBar on Login page
    if (location.pathname === '/login') return null

    return (
        <AppBar position="sticky" elevation={0} sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backdropFilter: 'blur(10px)'
        }}>
            <Toolbar sx={{ py: 1 }}>
                <Typography variant="h5" component="div" sx={{
                    flexGrow: 1,
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                }}>
                    📰 FlipItNews Advanced
                </Typography>

                <Stack direction="row" spacing={1}>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        sx={{
                            fontWeight: 600,
                            bgcolor: isActive('/') ? 'rgba(255,255,255,0.2)' : 'transparent'
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/predict"
                        sx={{
                            fontWeight: 600,
                            bgcolor: isActive('/predict') ? 'rgba(255,255,255,0.2)' : 'transparent'
                        }}
                    >
                        AI Predict
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/recommend"
                        sx={{
                            fontWeight: 600,
                            bgcolor: isActive('/recommend') ? 'rgba(255,255,255,0.2)' : 'transparent'
                        }}
                    >
                        For You
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/tech-stack"
                        startIcon={<CodeIcon />}
                        sx={{
                            fontWeight: 600,
                            bgcolor: isActive('/tech-stack') ? 'rgba(255,255,255,0.2)' : 'transparent',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}
                    >
                        Tech Stack
                    </Button>
                </Stack>

                <IconButton
                    color="inherit"
                    sx={{ ml: 2 }}
                    onClick={handleClick}
                    aria-controls={open ? 'notification-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Badge badgeContent={notifications.filter(n => !n.read).length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                {/* Notification Menu */}
                <Menu
                    anchorEl={anchorEl}
                    id="notification-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            width: 320,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Box sx={{ p: 2, borderBottom: '1px solid #eee' }}>
                        <Typography variant="subtitle1" fontWeight={700}>Notifications</Typography>
                    </Box>
                    {notifications.map((notification) => (
                        <MenuItem key={notification.id} onClick={handleClose}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                <Typography variant="body2" fontWeight={notification.read ? 400 : 700}>
                                    {notification.text}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {notification.time}
                                </Typography>
                            </Box>
                        </MenuItem>
                    ))}
                    <Divider />
                    <MenuItem
                        component={Link}
                        to="/notifications"
                        onClick={handleClose}
                        sx={{ justifyContent: 'center', color: 'primary.main', fontWeight: 600 }}
                    >
                        View All
                    </MenuItem>
                </Menu>

                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
                    <Avatar sx={{ bgcolor: '#fff', color: '#764ba2', fontWeight: 'bold' }}>U</Avatar>
                </IconButton>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={openUser}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/settings" onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Settings</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem component={Link} to="/login" onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" color="error">Logout</Typography>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

function getCategoryColor(category) {
    const colors = {
        Technology: '#667eea',
        Business: '#f093fb',
        Sports: '#4facfe',
        Entertainment: '#fa709a',
        Politics: '#764ba2'
    }
    return colors[category] || '#667eea'
}

function ArticleDialog({ open, onClose, article }) {
    if (!article) return null

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 3 } }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
                <Chip
                    label={article.category}
                    size="small"
                    sx={{ bgcolor: getCategoryColor(article.category), color: 'white', fontWeight: 600 }}
                />
                <IconButton onClick={onClose} size="small">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ borderTop: 'none' }}>
                <Box sx={{
                    textAlign: 'center',
                    py: 6,
                    bgcolor: `${getCategoryColor(article.category)}15`,
                    borderRadius: 3,
                    mb: 4
                }}>
                    <Typography variant="h1" sx={{ fontSize: '5rem', mb: 2 }}>{article.image}</Typography>
                </Box>
                <Typography variant="h4" fontWeight={800} gutterBottom sx={{ lineHeight: 1.3 }}>
                    {article.title}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 4, opacity: 0.7 }}>
                    <Typography variant="body2">📅 2 hours ago</Typography>
                    <Typography variant="body2">✍️ AI Reporter</Typography>
                    <Typography variant="body2">⏱️ 5 min read</Typography>
                </Stack>
                <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mb: 3, fontStyle: 'italic', borderLeft: '4px solid #ddd', pl: 2 }}>
                    "{article.summary}"
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
                <Button onClick={onClose} sx={{ color: 'text.secondary' }}>Close</Button>
                <Button variant="contained" startIcon={<ShareIcon />} sx={{
                    bgcolor: getCategoryColor(article.category),
                    '&:hover': { bgcolor: getCategoryColor(article.category) }
                }}>
                    Share Article
                </Button>
            </DialogActions>
        </Dialog>
    )
}

function Home() {
    const [news, setNews] = useState([])
    const [category, setCategory] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedArticle, setSelectedArticle] = useState(null)

    const categories = ['all', 'Technology', 'Business', 'Sports', 'Entertainment', 'Politics']

    const allNews = [
        { id: 1, title: "AI Breakthrough in Natural Language Processing", category: "Technology", summary: "New transformer model achieves 98% accuracy in text classification.", image: "🤖", trending: true },
        { id: 2, title: "Stock Market Hits All-Time High", category: "Business", summary: "Major indices reach record levels as tech stocks surge.", image: "📈", trending: true },
        { id: 3, title: "Championship Game Ends in Thriller", category: "Sports", summary: "Team A wins the cup in overtime with a stunning goal.", image: "⚽", trending: false },
        { id: 4, title: "New Blockbuster Breaks Box Office Records", category: "Entertainment", summary: "Latest superhero film earns $500M in opening weekend.", image: "🎬", trending: true },
        { id: 5, title: "Senate Passes Historic Climate Bill", category: "Politics", summary: "Landmark legislation aims to reduce emissions by 50%.", image: "🏛️", trending: false },
        { id: 6, title: "Apple Unveils Revolutionary iPhone 16", category: "Technology", summary: "New AI chip promises 10x faster processing power.", image: "📱", trending: true },
        { id: 7, title: "Cryptocurrency Market Rebounds Strongly", category: "Business", summary: "Bitcoin surges past $60,000 as investor confidence returns.", image: "💰", trending: false },
        { id: 8, title: "Olympics 2024: Record-Breaking Performances", category: "Sports", summary: "Athletes shatter multiple world records in Paris.", image: "🏅", trending: true },
    ]

    useEffect(() => {
        setNews(allNews)
    }, [])

    const filteredNews = news.filter(item =>
        (category === 'all' || item.category === category) &&
        (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const featuredNews = filteredNews.find(n => n.trending) || filteredNews[0]

    return (
        <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', pb: 4 }}>
            <Box sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                py: 6,
                mb: 4
            }}>
                <Container>
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        Stay Informed with AI-Powered News
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
                        Real-time classification • Personalized recommendations • Powered by BERT & ML
                    </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search news articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{
                            bgcolor: 'white',
                            borderRadius: 2,
                            maxWidth: 600,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 'none' }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>
            </Box>

            <Container>
                <Paper elevation={0} sx={{ mb: 3, borderRadius: 2 }}>
                    <Tabs
                        value={category}
                        onChange={(e, val) => setCategory(val)}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{ borderBottom: 1, borderColor: 'divider' }}
                    >
                        {categories.map(cat => (
                            <Tab key={cat} label={cat} value={cat} />
                        ))}
                    </Tabs>
                </Paper>

                {featuredNews && (
                    <Card sx={{ mb: 4, borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
                        <Box sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            p: 4,
                            color: 'white'
                        }}>
                            <Chip
                                icon={<TrendingUpIcon />}
                                label="TRENDING NOW"
                                sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', mb: 2 }}
                            />
                            <Typography variant="h3" fontWeight={700} gutterBottom>
                                {featuredNews.image} {featuredNews.title}
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
                                {featuredNews.summary}
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Chip label={featuredNews.category} sx={{ bgcolor: 'white', color: '#764ba2' }} />
                                <Button
                                    variant="contained"
                                    sx={{ bgcolor: 'white', color: '#764ba2' }}
                                    onClick={() => setSelectedArticle(featuredNews)}
                                >
                                    Read More
                                </Button>
                            </Stack>
                        </Box>
                    </Card>
                )}

                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                    Latest Stories
                </Typography>
                <Grid container spacing={3}>
                    {filteredNews.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card sx={{
                                height: '100%',
                                borderRadius: 3,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: 6
                                }
                            }}>
                                <Box sx={{
                                    height: 120,
                                    background: `linear-gradient(135deg, ${getCategoryColor(item.category)} 0%, ${getCategoryColor(item.category)}dd 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem'
                                }}>
                                    {item.image}
                                </Box>
                                <CardContent>
                                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                                        <Chip
                                            label={item.category}
                                            size="small"
                                            sx={{
                                                bgcolor: getCategoryColor(item.category),
                                                color: 'white',
                                                fontWeight: 600
                                            }}
                                        />
                                        {item.trending && (
                                            <Chip
                                                icon={<TrendingUpIcon />}
                                                label="Trending"
                                                size="small"
                                                color="error"
                                            />
                                        )}
                                    </Stack>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.summary}
                                    </Typography>
                                    <Button
                                        size="small"
                                        sx={{ mt: 2 }}
                                        onClick={() => setSelectedArticle(item)}
                                    >
                                        Read More →
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <ArticleDialog
                open={Boolean(selectedArticle)}
                onClose={() => setSelectedArticle(null)}
                article={selectedArticle}
            />
        </Box>
    )
}

function Predict() {
    const [text, setText] = useState('')
    const [result, setResult] = useState(null)
    const [model, setModel] = useState('bert')
    const [loading, setLoading] = useState(false)

    const handlePredict = async () => {
        setLoading(true)
        try {
            const endpoint = model === 'bert' ? '/predict/bert' : '/predict/custom'
            const res = await axios.post(`${API_URL}${endpoint}`, { text })
            setResult(res.data)
        } catch (err) {
            console.error(err)
        }
        setLoading(false)
    }

    const sampleTexts = [
        "Apple announces new iPhone with revolutionary AI chip and advanced camera technology",
        "Stock market reaches all-time high as tech companies report strong earnings",
        "Lakers win championship in thrilling overtime game against rivals",
        "New Marvel movie breaks box office records in opening weekend",
        "Senate passes historic climate change legislation with bipartisan support"
    ]

    return (
        <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 4 }}>
            <Container maxWidth="md">
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        🤖 AI News Classifier
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Powered by advanced machine learning models trained on thousands of articles
                    </Typography>

                    <Tabs value={model} onChange={(e, val) => setModel(val)} sx={{ mb: 3 }}>
                        <Tab label="🧠 BERT Model (98% Accuracy)" value="bert" />
                        <Tab label="⚡ Custom Model (90% Accuracy, Fast)" value="custom" />
                    </Tabs>

                    <TextField
                        fullWidth
                        multiline
                        rows={6}
                        variant="outlined"
                        placeholder="Paste or type a news article here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    <Typography variant="subtitle2" gutterBottom>Quick samples:</Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                        {sampleTexts.map((sample, idx) => (
                            <Chip
                                key={idx}
                                label={`Sample ${idx + 1}`}
                                onClick={() => setText(sample)}
                                variant="outlined"
                                size="small"
                            />
                        ))}
                    </Stack>

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={handlePredict}
                        disabled={!text || loading}
                        sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600
                        }}
                    >
                        {loading ? 'Analyzing...' : '🚀 Classify Article'}
                    </Button>

                    {result && (
                        <Card sx={{ mt: 4, borderRadius: 2, border: '2px solid', borderColor: getCategoryColor(result.category) }}>
                            <CardContent>
                                <Typography variant="h5" fontWeight={700} gutterBottom>
                                    📊 Prediction Results
                                </Typography>
                                <Box sx={{ my: 2 }}>
                                    <Typography variant="h3" fontWeight={700} sx={{ color: getCategoryColor(result.category) }}>
                                        {result.category}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        Confidence: {(result.confidence * 100).toFixed(2)}%
                                    </Typography>
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    Model: {result.model_used}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </Paper>
            </Container>
        </Box>
    )
}

function Recommendations() {
    const [recs, setRecs] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/recommendations/user1`)
            .then(res => {
                // Combine backend data with more mock data for a better UI demo
                const backendData = res.data
                const moreMockData = [
                    { id: 101, title: "Understanding Large Language Models", category: "Technology", reason: "Because you read about AI", image: "🧠" },
                    { id: 102, title: "Top 10 Investment Strategies for 2025", category: "Business", reason: "Trending in Finance", image: "💸" },
                    { id: 103, title: "The Future of Quantum Computing", category: "Technology", reason: "Similar to your interests", image: "⚛️" },
                    { id: 104, title: "Global Economic Outlook", category: "Business", reason: "Popular among investors", image: "🌐" }
                ]
                setRecs([...backendData, ...moreMockData])
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 4 }}>
            <Container>
                {/* Header Section */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h3" fontWeight={700} gutterBottom sx={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        ✨ For You
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Curated insights based on your reading habits
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* User Profile Side Panel */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 3, mb: 3, position: 'sticky', top: 100 }}>
                            <Box sx={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                p: 3,
                                textAlign: 'center',
                                color: 'white'
                            }}>
                                <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'white', color: '#764ba2', fontSize: '2rem' }}>U</Avatar>
                                <Typography variant="h5" fontWeight={700}>Welcome back!</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>Member since 2024</Typography>
                            </Box>
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                                    🎯 Your Interests
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                    {['Technology', 'AI', 'Finance', 'Startups'].map(tag => (
                                        <Chip key={tag} label={tag} size="small" sx={{ bgcolor: '#f0f4ff', color: '#667eea', fontWeight: 600 }} />
                                    ))}
                                </Box>

                                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                                    📊 Reading Stats
                                </Typography>
                                <Stack spacing={2}>
                                    <Box>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography variant="caption">Tech News</Typography>
                                            <Typography variant="caption" fontWeight={700}>85%</Typography>
                                        </Stack>
                                        <Box sx={{ height: 6, bgcolor: '#eee', borderRadius: 3, mt: 0.5 }}>
                                            <Box sx={{ height: '100%', width: '85%', bgcolor: '#667eea', borderRadius: 3 }} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography variant="caption">Business</Typography>
                                            <Typography variant="caption" fontWeight={700}>45%</Typography>
                                        </Stack>
                                        <Box sx={{ height: 6, bgcolor: '#eee', borderRadius: 3, mt: 0.5 }}>
                                            <Box sx={{ height: '100%', width: '45%', bgcolor: '#f093fb', borderRadius: 3 }} />
                                        </Box>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Recommendations Feed */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                            Daily Picks
                        </Typography>
                        <Stack spacing={3}>
                            {recs.map((item, index) => (
                                <Card key={index} sx={{
                                    borderRadius: 3,
                                    transition: 'all 0.2s',
                                    '&:hover': { transform: 'translateX(5px)', boxShadow: 4 },
                                    display: 'flex',
                                    overflow: 'hidden'
                                }}>
                                    <Box sx={{
                                        width: 100,
                                        bgcolor: `${getCategoryColor(item.category)}22`,
                                        display: { xs: 'none', sm: 'flex' },
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '3rem'
                                    }}>
                                        {item.image || '📄'}
                                    </Box>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <CardContent>
                                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                                                <AutoAwesomeIcon fontSize="small" sx={{ color: '#f50057' }} />
                                                <Typography variant="caption" sx={{ color: '#f50057', fontWeight: 700, letterSpacing: 0.5 }}>
                                                    {item.reason.toUpperCase()}
                                                </Typography>
                                            </Stack>
                                            <Typography variant="h6" fontWeight={700} gutterBottom>
                                                {item.title}
                                            </Typography>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Chip
                                                    label={item.category}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: getCategoryColor(item.category),
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        height: 24
                                                    }}
                                                />
                                                <Typography variant="caption" color="text.secondary">
                                                    • 5 min read
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Box>
                                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                                        <IconButton color="primary">
                                            <TrendingUpIcon />
                                        </IconButton>
                                    </Box>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

function TechStack() {
    const stacks = [
        {
            title: "Frontend",
            icon: <CodeIcon fontSize="large" />,
            color: "#61DAFB",
            items: ["React.js 18", "Vite 5", "Material UI 5", "Axios", "React Router 6"]
        },
        {
            title: "Backend",
            icon: <StorageIcon fontSize="large" />,
            color: "#3776AB",
            items: ["FastAPI", "Python 3.11", "Uvicorn", "Pydantic", "JWT Auth"]
        },
        {
            title: "AI & ML",
            icon: <PsychologyIcon fontSize="large" />,
            color: "#FF6F00",
            items: ["BERT (Transformers)", "PyTorch", "Scikit-learn", "Pandas", "NLTK"]
        },
        {
            title: "DevOps",
            icon: <CloudIcon fontSize="large" />,
            color: "#FF9900",
            items: ["Docker", "Docker Compose", "AWS EC2", "AWS S3", "Git"]
        }
    ]

    const metrics = [
        { label: "BERT Accuracy", value: "98%", color: "#4caf50" },
        { label: "Custom Model Accuracy", value: "90%", color: "#2196f3" },
        { label: "Inference Time (Custom)", value: "<100ms", color: "#ff9800" },
        { label: "Backend Latency", value: "~50ms", color: "#f44336" }
    ]

    return (
        <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 6 }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" fontWeight={700} gutterBottom sx={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        🛠️ Technology Stack
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Built with modern, high-performance technologies
                    </Typography>
                </Box>

                {/* Tech Categories */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {stacks.map((stack, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{
                                height: '100%',
                                borderRadius: 3,
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
                            }}>
                                <Box sx={{ p: 3, display: 'flex', alignItems: 'center', bgcolor: `${stack.color}15` }}>
                                    <Box sx={{ color: stack.color, mr: 2 }}>
                                        {stack.icon}
                                    </Box>
                                    <Typography variant="h5" fontWeight={700} sx={{ color: stack.color }}>
                                        {stack.title}
                                    </Typography>
                                </Box>
                                <CardContent>
                                    <List>
                                        {stack.items.map((item, idx) => (
                                            <div key={idx}>
                                                <ListItem>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <BuildIcon fontSize="small" color="action" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 500 }} />
                                                </ListItem>
                                                {idx < stack.items.length - 1 && <Divider variant="inset" component="li" />}
                                            </div>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Performance Metrics */}
                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                    ⚡ Performance Metrics
                </Typography>
                <Grid container spacing={3} sx={{ mb: 8 }}>
                    {metrics.map((metric, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', borderRadius: 3, borderTop: `4px solid ${metric.color}` }}>
                                <Typography variant="h4" fontWeight={800} sx={{ color: metric.color, mb: 1 }}>
                                    {metric.value}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                                    {metric.label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Architecture Diagram */}
                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                    🏗️ System Architecture
                </Typography>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3, bgcolor: '#2d3748', color: 'white', overflowX: 'auto' }}>
                    <pre style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}>
                        {`
┌─────────────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
│    Frontend (React)     │      │    Backend (FastAPI)    │      │       Data Layer        │
│                         │ HTTP │                         │      │                         │
│  [User Interface]       │◄────►│  [API Endpoints]        │◄────►│  [CSV Dataset]          │
│  - Material UI          │ JSON │  - /predict/bert        │      │  [BERT Model Cache]     │
│  - Axios Client         │      │  - /predict/custom      │      │  [Custom Model .joblib] │
│  - React Router         │      │  - /news/feed           │      │  [Logs]                 │
│                         │      │                         │      │                         │
└─────────────────────────┘      └─────────────────────────┘      └─────────────────────────┘
                                              ▲
                                              │
                                     ┌────────┴────────┐
                                     │   AI Engine     │
                                     │ - Transformers  │
                                     │ - Scikit-learn  │
                                     │ - PyTorch       │
                                     └─────────────────┘
`}
                    </pre>
                </Paper>

            </Container>
        </Box>
    )
}

function Footer() {
    const location = useLocation()
    if (location.pathname === '/login') return null

    return (
        <Box sx={{ bgcolor: '#1a202c', color: 'white', py: 4, mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight={700} gutterBottom sx={{ background: 'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            FlipItNews Advanced
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            Revolutionizing financial literacy and news consumption with state-of-the-art AI technology.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
                            <Link to="/predict" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>AI Predict</Link>
                            <Link to="/tech-stack" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Tech Stack</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                            Connect
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            GitHub: @Ratnesh-181998
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            Email: contact@flipitnews.com
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 2, textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ opacity: 0.5 }}>
                        © 2025 FlipItNews Advanced. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

function App() {
    return (
        <Router>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/predict" element={<Predict />} />
                    <Route path="/recommend" element={<Recommendations />} />
                    <Route path="/tech-stack" element={<TechStack />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                <Footer />
            </Box>
        </Router>
    )
}

export default App
