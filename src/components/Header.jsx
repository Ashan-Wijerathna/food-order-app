import logoImg from '../assets/logo.jpg';
export default  function Header(){
    return(
        <header id ='main-header'>
            <div id='title'>
                <img src={logoImg} alt ="A resurant"/>
                <h1>Food Order</h1>
            </div>
            <nav>
                <Button textOnly> Cart (0)</Button>
            </nav>
        </header>
    )
}