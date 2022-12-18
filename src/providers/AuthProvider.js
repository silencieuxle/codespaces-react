export class AuthProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            webToken: null       
        }
    }

    authenticate = (credentials) => {
        setTimeout(() => {
            this.setState({ isAuthenticated: true, webToken: null });
        }, 100);
    }

    signout = () => {
        setTimeout(() => {
            this.setState({ isAuthenticated: false, webToken: null });
        }, 100);
    }

    render = () => 
        <AuthContext.Provider value={ {...this.state, 
                authenticate: this.authenticate, signout: this.signout}}>
            { this.props.children }        
        </AuthContext.Provider>
}