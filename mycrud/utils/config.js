var domain;

if (process.env.NODE_ENV === 'production') {
    
} else {
    domain= 'http://localhost:3000/api'
}

export default domain