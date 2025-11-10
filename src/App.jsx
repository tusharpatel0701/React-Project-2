import Section2 from './components/Section2/Section2'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users =[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776",
      intro:"Hi, I am Neha Sharma, a 27-year-old marketing professional with 4 years of experience in digital branding and social media strategy. ",
      tag:"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
      intro:"Hi, I am Emily Johnson, a 22-year-old project manager from New York with 8 years of experience in IT consulting.",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
      intro:"Hi, I am Rahul Mehta, a 28-year-old software engineer with 5 years of experience in backend development. ",
      tag:"Underbanked"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
      intro:"Hi, I am Sarah Williams, a 29-year-old UX designer from London with 5 years of experience in user research and interface design. ",
      tag:"Underserved"
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
     </div>
  )
}

export default App