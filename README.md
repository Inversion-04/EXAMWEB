Sbse pehle maine Vite ka setup kiya React ke sath
Uske baad maine TailwindCSS configure kiya styling ke liye — jisse UI bnayii h

Phir maine Axios ka use karke FakeStore API se products fetch kiye
aur unhe React ke state me store kar liya taaki data ko easily components me pass kar saku.

Components Overview

ApiCalling.jsx:

Yahan maine API call likhi using Axios.
Data fetch karke allProducts state me store kiya.
Loading aur Error handling bhi add kiya 

Navbar.jsx:

Isme project ka title aur search bar rakha gaya hai.
Search bar ke through user koi bhi product ka naam likhe to
wahi matching products filter hoke show hote hain.

ProductCard.jsx

Ye component ek single product ko card ke form me show karta hai.
Card me image, title aur price dikhte hain.
Hover effect aur smooth animations add kiye using TailwindCSS.

Body.jsx

Ye main component hai jahan products grid ke form me show hote hain.
API se aaya hua data yahan map() karke render kiya gaya.
Search functionality ke liye filteredProducts state use ki gayi.
Navbar se aaye filter ke according yahan products update hote hain.

App.jsx

Ye main entry point hai jisme Navbar aur Body dono render ho rahe hain.
Navbar upar fixed rahta hai aur Body me product cards show hote hain.