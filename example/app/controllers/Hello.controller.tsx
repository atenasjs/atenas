import {React} from '../../deps.ts'
class Hello extends React.Component {
  state = {
    teste: 'teste'
  }

  componentDidMount() {
    console.log('aloha')
  }

  render() {
    const {teste} = this.state
    return (<span>{teste}</span>)
  }
}

export default Hello;
