# Frontend Setup & Development Guide

## Quick Start

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- Backend API running (see server README)

### Installation

```bash
cd client
npm install
```

### Environment Setup

Create a `.env` file from the template:

```bash
cp .env.example .env
```

Update `.env` with your backend API URL:

```env
# Development
VITE_API_URL=http://localhost:5000/api

# Production
VITE_API_URL=https://api.yourdomain.com/api
```

### Running the Development Server

```bash
npm run dev
```

The frontend will start at `http://localhost:5173` (Vite default)

### Building for Production

```bash
npm run build
```

Production files will be in the `dist/` directory

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
client/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── nav/             # Navigation components
│   │   ├── ui/              # UI components
│   │   └── ProtectedRoute.jsx
│   ├── context/             # React Context
│   │   └── AuthContext.jsx  # Authentication context
│   ├── pages/               # Page components
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration page
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   └── ...
│   ├── routes/              # Router configuration
│   │   ├── AppRouter.jsx
│   │   └── user/
│   ├── services/            # API services
│   │   └── authService.js   # Authentication API calls
│   ├── assets/              # Images, icons, etc
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js          # Vite configuration
├── package.json
└── .env                     # Environment variables
```

## Authentication Flow

### Login Process
1. User enters username and password on `/login`
2. Credentials sent to backend `/api/auth/login`
3. Backend returns access token and user data
4. Token stored in localStorage
5. User redirected to `/account/dashboard`

### Registration Process
1. User enters details on `/register`
2. Data sent to backend `/api/auth/register`
3. User account created on backend
4. User automatically logged in
5. User redirected to `/account/dashboard`

### Protected Routes
- `/account/*` routes require authentication
- Unauthenticated users redirected to `/login`
- ProtectedRoute component handles logic

### Logout
1. User clicks logout button
2. API call to backend to invalidate token
3. Local storage cleared
4. User redirected to home page

## Key Features Implemented

### Authentication Context (`context/AuthContext.jsx`)
- User state management
- Login/Register/Logout functions
- Loading and error states
- Automatic token refresh
- Persistent login (localStorage)

### Auth Service (`services/authService.js`)
- API client with Axios
- Request/response interceptors
- Token injection in headers
- Automatic token refresh
- Error handling

### Protected Routes (`components/ProtectedRoute.jsx`)
- Redirects unauthenticated users
- Shows loading state
- Prevents unauthorized access

### Login Page (`pages/Login.jsx`)
- Username/password input
- Show/hide password toggle
- Remember me checkbox
- Error/success messages
- Form validation
- Loading state

### Register Page (`pages/Register.jsx`)
- Full name input
- Username input with validation
- Email input with validation
- Password strength validation
- Confirm password matching
- Referral code support
- Error/success messages
- Loading state

## Environment Variables

### Development
```env
VITE_API_URL=http://localhost:5000/api
```

### Production
```env
VITE_API_URL=https://your-production-api.com/api
```

Rebuild after changing environment variables:
```bash
npm run build
```

## API Integration

### Making Authenticated Requests

The `authService` automatically adds tokens to requests:

```javascript
import authService from '../services/authService'

// The token is automatically added to Authorization header
const user = await authService.getCurrentUser()
```

### Handling Authentication Errors

The API client automatically redirects to login on 401 errors:

```javascript
// If token is invalid or expired, user is redirected to /login
```

### Custom API Requests

For non-auth endpoints:

```javascript
import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
})

// Add token if needed
const token = localStorage.getItem('accessToken')
if (token) {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
```

## Using Auth Context

### In any component:

```javascript
import { useAuth } from '../context/AuthContext'

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth()
  
  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.fullName}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  )
}
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository in Vercel
3. Set environment variable: `VITE_API_URL=https://your-api-url.com/api`
4. Deploy

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Build command: `npm run build`
4. Add environment variables in settings
5. Deploy

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` to hosting
3. Configure web server to serve `index.html` for all routes (SPA routing)
4. Set backend API URL appropriately

## Troubleshooting

### Login/Register not working
- Check backend is running at the API URL
- Verify `VITE_API_URL` in `.env` is correct
- Check browser console for errors
- Verify CORS is enabled on backend

### Token not persisting
- Check localStorage is not disabled
- Clear browser cache
- Check localStorage in DevTools

### Protected routes redirecting
- Verify token is in localStorage
- Check token hasn't expired
- Review console for token errors

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `rm -rf .vite`
- Rebuild: `npm run build`

## Development Tips

### Enable Redux DevTools (if using Redux)
Install browser extension for better debugging

### Use these tools:
- VS Code with ES7+ snippets
- React DevTools browser extension
- Chrome DevTools Network tab (monitor API calls)

### Hot Module Replacement (HMR)
Vite automatically reloads on file save - no manual restart needed

### Debugging API Calls
Monitor Network tab in DevTools:
1. Open DevTools → Network tab
2. Perform login/register
3. See API requests and responses

## Best Practices

1. **Never log sensitive data** - Don't log tokens or passwords
2. **Use environment variables** - Don't hardcode API URLs
3. **Handle errors gracefully** - Show user-friendly error messages
4. **Validate on client** - Catch errors before sending to API
5. **Protect routes** - Use ProtectedRoute for auth-required pages
6. **Clear sensitive data** - Clear localStorage on logout
7. **Use HTTPS in production** - Always use HTTPS for production
8. **Monitor console** - Check for warnings and errors regularly

## Performance Optimization

- Code splitting: Lazy load routes with React.lazy()
- Image optimization: Use appropriate image formats and sizes
- Compression: Enable gzip compression on server
- Caching: Set proper cache headers
- Minification: Vite automatically minifies in production

## Support & Resources

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Axios Docs: https://axios-http.com
- React Router: https://reactrouter.com

---

Built with ❤️ for Guvenili
