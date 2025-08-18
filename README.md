This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Recently, I Set Up a VPS with Ubuntu GUI and Run a Node.js Project Accessible Globally — A Quick Guide for Developers

1️⃣ Start with your VPS virtualization panel

Go to your VPS provider’s virtualization interface, select the OS system, and choose the Ubuntu ISO disk to install.

2️⃣ Install Ubuntu

Follow the standard installation steps until Ubuntu is up and running.

3️⃣ Set up a GUI and remote access

Install a lightweight XFCE GUI and XRDP so you can access your VPS remotely like a normal desktop.

Step 1: Update your system

sudo apt update

Step 2: Install XFCE GUI and XRDP for remote access

sudo apt install xfce4 xfce4-goodies -y

sudo apt install xrdp -y

sudo systemctl enable xrdp --now

sudo systemctl status xrdp   # check if active

sudo systemctl restart xrdp   # restart if needed

echo "startxfce4" > ~/.xsession

sudo systemctl restart xrdp

Step 3: Install Node.js and NPM using n version manager

sudo apt install curl -y

curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n

bash n lts

sudo npm install -g n

sudo n 20.17.0

sudo npm install -g npm@11.4.2

Step 4: Verify versions

node -v   # should be v20.17.0

npm -v    # should be 11.4.2

✅ Now your VPS is ready with a GUI environment and a modern Node.js setup — perfect for development, testing, or running apps remotely.


✅Connect to Your VPS via Remote Desktop
On your PC, open Remote Desktop Connection.

In the input box, enter your VPS IP address and click Connect.

When prompted, enter your username and password to verify.

After successful login, you will see the Ubuntu GUI ready to use.

✅ Now you can access your VPS desktop environment remotely, just like a local computer.



✅ After setting up your VPS GUI and Node.js environment:

1️⃣ Open the Ubuntu terminal on your VPS.

2️⃣ Create a project directory: I created a folder called akash to keep my project organized.

3️⃣ Navigate into your folder and check its contents: You’ll see all your folders with ls.

4️⃣ Clone your project repository: Using Git, I cloned my project directly into the akash folder. This way, all files are ready for development or running the app.

After cloning my project repository:

1️⃣ I navigated into the project folder: hms.

2️⃣ Installed all the project dependencies using npm install.

3️⃣ Installed nodemon globally to make development easier and automatically restart the server when files change.

Now the project is ready to run locally on the VPS and can later be accessed globally.

Once the project dependencies are installed:

1️⃣ I started the Node.js server using nodemon from the root folder (server.js). This allows the server to automatically restart whenever I make changes.

npx nodemon server.js

2️⃣ Or simply run the server with Node.js:

node server.js

✅ Now your Node.js app is running on your VPS

Once your Node.js server is running:

1️⃣ You can install a lightweight browser on your Ubuntu VPS, like Midori or Falcon, to view your project directly from the server.

2️⃣ Open the browser and navigate to:

http://localhost:5000

After running your Node.js server locally, you might notice that your app is accessible on the VPS itself (e.g., via http://localhost:5000) but not globally.



To make it accessible from anywhere, you need to set your server to listen on all network interfaces:

const PORT = process.env.PORT || 5000;



app.listen(PORT, '0.0.0.0', () => {

  console.log(`Server running at http://localhost:${PORT}`);

});

✅ By using '0.0.0.0', your Node.js app will now accept connections from any IP address, allowing you to access it globally:

http://<your-server-ip>:5000

After configuring the Node.js server to listen on 0.0.0.0, my app is now accessible globally.

For example, anyone can access it via:

http://160.25.7.194:5000/api/wellcome





i need to make short but without losse and value 

sudo apt update
sudo apt install nginx certbot python3-certbot-nginx -y
sudo nano /etc/nginx/sites-available/api.arakash.com
server {
    listen 80;
    server_name api.arakash.com;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
sudo ln -s /etc/nginx/sites-available/api.arakash.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo certbot --nginx -d api.arakash.com
https://api.arakash.com


1) hero hii 
2) Download CV and gif alignment
3) gif slow video
4) story section padding bottom 8 px
5) story animation (in a few )
6) motivation scroll problem
7) blinto llc space problem
8) experience gallery glitch


Got it — you want each of these 12 lines with a ✅ at the end.

Here you go:

system core check
grep -c ^processor /proc/cpuinfo
nproc
system ram check
awk '/MemTotal/ {printf "RAM: %.2f GB\n", $2/1024/1024}' /proc/meminfo
system rom check
lsblk

