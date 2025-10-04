<h1 align="center">💼 CyberMindWorks Job Portal</h1>

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

## 🏗️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | Next.js 15 (App Router) |
| **UI Library** | Mantine |
| **Icons** | Tabler Icons |
| **Styling** | CSS Modules + Scoped Component Styles |
| **Backend** | Node.js + Express |
| **Database** | PostgreSQL |
| **ORM / Querying** | Prisma |
| **Hosting** | Vercel |
| **Version Control** | Git & GitHub |

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
git clone https://github.com/smooth-glitch/job-portal.git
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
