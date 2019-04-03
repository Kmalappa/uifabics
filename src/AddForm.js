import React, {
    Component
} from 'react';
import { initializeIcons } from '@uifabric/icons';
import SkuForm from './SkuForm';
import { IStackTokens, Stack, ActionButton, Link } from 'office-ui-fabric-react/lib';
initializeIcons();
const stackTokens: IStackTokens = {
  childrenGap: 40
};

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = { inputs: ['0'] };
        this.clickEvent = this.clickEvent.bind(this);
        this.myCallback = this.myCallback.bind(this);
    }
    clickEvent(): void {
      var newInput = this.state.inputs.length;
          this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
    myCallback(): void {
      this.state.inputs.pop();
      this.setState(prevState => ({ inputs: prevState.inputs }));
    }
    render() {
      return (
        <>
        <Link href="/chart"></Link>
            <Stack wrap tokens={stackTokens}  padding={30}>
              {this.state.inputs.map(input => 
              <Stack.Item align="stretch" grow >
              <SkuForm num={input} callbackFromParent={this.myCallback}/>
              </Stack.Item>
              )}
              <Stack.Item align="stretch" grow >
              <ActionButton text="Add SKU" onClick={this.clickEvent} > Add SKU </ActionButton>
              </Stack.Item>
            </Stack>
        </>
            
        
      );
    }

};

export default AddForm;