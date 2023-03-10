export class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            data: {}
        }
    }

    authenticate = (username, password, callback) => {
        setTimeout(() => {
            this.setState({ isAuthenticated: true, data: { username, password } })
            callback();
        }, 100);
    }

    signout = () => {
        setTimeout(() => {
            this.setState({ isAuthenticated: false, data: null })
        }, 100);
    }

    render = () =>
        <AuthContext.Provider value={{
            isAuthenticated: this.state.isAuthenticated,
            data: this.state.data,
            authenticate: this.authenticate,
            signout: this.signout
        }}>
            {this.props.children}
        </AuthContext.Provider>
}