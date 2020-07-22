import { connect } from 'react-redux'

const mapStateToProps = (props) => {
    ...
}

const mapDispatchToProps = () => {
    ...
}

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignInContainer