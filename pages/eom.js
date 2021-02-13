import Head from 'next/head'
import { Toolbar } from '../components/toolbar';
import styles from '../styles/eom.module.css'
export const EOM=({employee})=>{
    console.log(employee);
    return(
        <>
        <Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
      <Toolbar/>
      <div className="page-container">
        
        <div className={styles.main}>
          <h1>Employee Of The Month</h1>

          <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            <h6>{employee.Profession}</h6>
            <img src={employee.image} alt="employee" />
            <p>{employee.Education}</p>
          </div>
        </div>
      </div>
      </>
    )
}


export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
      'https://my-json-server.typicode.com/imrkale/news-app/employeeDB',
    );
    const employee = await apiResponse.json();
  
    return {
      props: {
        employee,
      },
    };
  };
  export default EOM;
