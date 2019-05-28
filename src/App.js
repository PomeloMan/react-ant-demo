import React from 'react';
import logo from './logo.svg';
import styles from '@/App.module.scss';
// import Button from 'antd/lib/button';
// import { Button } from 'antd';
// import { Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <header className={styles.header} onClick={this.toMain}>
        <img src={logo} className={styles.logo} alt="logo"/>
        {/* <Button type="primary">
          <Link to="/main">Main</Link>
        </Button> */}
      </header>
    );
  }

  toMain = () => {
    this.props.history.push('/main');
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className={styles.header} onClick={alertt}>
//         <img src={logo} className="App-logo" alt="logo"/>
//         <Button type="primary">
//           <Link to="/main">Main</Link>
//         </Button>
//       </header>
//     </div>
//   );
// }

// function alertt() {
//   alert(123)
// }

export default App;
