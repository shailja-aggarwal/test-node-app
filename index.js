const express = require('express')
const path = require('path') // helps to get specific path of file as send file takes absolute path
const app = express();

app.use(express.static('public')) // tell express that any request asking for aset will get from public dir


app.get('/',(req, res)=>{
    // res.json({
    //     name: 'test'
    // })
   // res.sendFile('index.html')
   res.sendFile(path.resolve(__dirname, 'index.html'))
   console.log(path.resolve(__dirname, 'index.html'))
   console.log(__dirname)
})

app.get('/about', (req, res) => {
    // res.send({
    //     name: 'about'
    // })
    //res.sendFile('about.html')
    res.sendFile(path.resolve(__dirname, 'about.html'))
    
})

app.get('/contact', (req, res) => {
    // res.send({
    //     name: 'contact'
    // })
    //res.sendFile('contact.html')
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})



app.listen(3000, () => {
    console.log('App listening on 3000')
})


// const http = require('http');
// const fs = require('fs');

// const aboutPage = fs.readFileSync('about.html') //synchronusFileRead: first reads the file then move to another
// //const aboutPage = fs.readFile('about.html', (file) => {}) //asynchronusFileRead
// const contactPage = fs.readFileSync('contact.html')
// //const contactPage = fs.readFile('contact.html', (file) => {})
// const homePage = fs.readFileSync('index.html')
// //const homePage = fs.readFile('index.html', (file)=> {} )

// const server = http.createServer((req, res)=> {
//     console.log('Request', req.url)
    
//     if(req.url === '/about'){
//         res.end(aboutPage)
//     } else if(req.url === '/contact'){
//         res.end(contactPage)
//     } else if(req.url === '/'){
//         res.end(homePage)
//     } else {
//         res.writeHead(404)
//         res.end('PAGE NOT FOUND')
//     }

//   //  res.end('Hello from node') // send this res back to browser
// })

// server.listen(3000)