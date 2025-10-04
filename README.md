<h1 align="center">💼 HireSphere</h1>

<p align="center">
  <b>Find Jobs. Post Jobs. Connect Talent.</b><br/>
  A modern, responsive full-stack job portal built with <b>Next.js 15</b>, <b>Mantine UI</b>, <b>PostgreSQL</b>, and <b>TypeScript</b>.
</p>

<p align="center">
  🌐 <a href="https://my-f2679ht48-arjuns-projects-6ac8da13.vercel.app/" target="_blank"><b>Live Demo</b></a> • 🧠 <a href="https://github.com/smooth-glitch/job-portal" target="_blank"><b>Source Code</b></a>
</p>

---

## 🚀 Features

- ✨ **Modern UI & UX** — Clean, responsive, and smooth interactions using Mantine & Tabler Icons.  
- ⚙️ **Full CRUD Functionality** — Create, view, and filter job listings with live updates.  
- 📅 **Smart Filtering** — Filter jobs by title, location, type, and salary range dynamically.  
- 🧠 **PostgreSQL Backend** — Structured, scalable, and secure database integration.  
- 🪄 **Real-time Search** — Typeahead filtering for smooth job discovery.  
- 🌈 **Responsive Design** — Optimized for desktop, tablet, and mobile.  
- 🔒 **TypeScript Strict Mode** — Type safety across all components.

---

## 💻 Tech Stack

<p align="center">
  <!-- Frontend -->
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Mantine-339af0?style=for-the-badge&logo=mantine&logoColor=white" alt="Mantine"/>
  <img src="https://img.shields.io/badge/Tabler%20Icons-2C3E50?style=for-the-badge&logo=tabler&logoColor=white" alt="Tabler Icons"/>

  <!-- Backend -->
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>

  <!-- Database -->
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>

  <!-- Tools & Hosting -->
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway"/>
  <img src="https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  <img src="https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
</p>

---

## 🖼️ Screenshots

### 🏠 Home Page  
Discover jobs by category and explore openings across cities  

<p align="center">
  <img src="https://github.com/smooth-glitch/JobPosting/blob/main/Home_Page.png" alt="Home Page" width="800"/>
</p>

---

### 🔍 Filters Bar  
Search by title, job type, location, and salary  

<p align="center">
  <img src="https://github.com/smooth-glitch/JobPosting/blob/main/Filters_Bar.png" alt="Filters Bar" width="800"/>
</p>

---

### 💬 Job Cards  
Minimal design with hover effects and responsive layout  

<p align="center">
  <img src="https://github.com/smooth-glitch/JobPosting/blob/main/Job_Cards.png" alt="Job Cards" width="800"/>
</p>

---

### 🧾 Create Job Modal  
Add new job postings with smooth transitions and validations  

<p align="center">
  <img src="https://github.com/smooth-glitch/JobPosting/blob/main/Create_Jobs.png" alt="Create Job Modal" width="800"/>
</p>

---

## 🧩 Folder Structure

```bash
app/
 ┣ components/
 ┃ ┣ FiltersBar.tsx
 ┃ ┣ JobCard.tsx
 ┃ ┣ CreateJobForm.tsx
 ┃ ┗ NavLink.module.css
 ┣ lib/
 ┃ ┗ api.ts
 ┣ jobs/
 ┃ ┗ page.tsx
 ┣ globals.css
 ┗ layout.tsx
````

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/smooth-glitch/HireSphere.git
cd job-portal
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Database

Create a PostgreSQL database named `mydb` and add your connection string to `.env`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"
```

### 4️⃣ Run Migrations

```bash
npx prisma migrate dev --name init
```

### 5️⃣ Start the Development Server

```bash
npm run dev
```

Then visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deployment

**Deployed on Vercel**

Simply connect your GitHub repository and set the environment variables:

* `DATABASE_URL`
* `NEXT_PUBLIC_API_URL`

✅ Automatically builds and deploys on every push to **main**.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Arjun Sridhar**
🌐 [LinkedIn](https://www.linkedin.com/in/arjun-sridhar-6466751b7)

---

## 🧠 Learnings & Highlights

* Building responsive layouts with Mantine Grid & Group.
* Handling controlled forms and API integration in Next.js.
* Optimizing components for accessibility and scalability.
* Designing hover and transition effects with pure CSS modules.

---

## 🏁 Future Enhancements

* 🚧 Authentication (JWT / OAuth)
* 📈 Dashboard analytics for employers
* 🔔 Real-time job notifications
* 📬 Candidate applications tracking
