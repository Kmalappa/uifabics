import React, { Component } from 'react';
import './App.css';
import { 
    IStackTokens, Stack, TextField, IconButton,
    Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption 
} from 'office-ui-fabric-react/lib';

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 }
  };

  const stackTokens: IStackTokens = {
    childrenGap: 20
  };
const options: IDropdownOption[] = [
    { key: 'lincensePathHeader', text: 'Licensing path', itemType: DropdownMenuItemType.Header },
    { key: 'no cloud to Microsoft 365 E3', text: 'No cloud to Microsoft 365 E3' },
    { key: 'office365E3+e5security', text: 'Office 365 E3 + E5 Security' },
    { key: 'micro365e3toe5', text: 'Microsoft 365 E3 to Microsoft 365 E5' },
    { key: 'header2', text: 'SKUs', itemType: DropdownMenuItemType.Header },
    { key: 'e5', text: 'Microsoft 365 E5' },
    { key: 'e3', text: 'Microsoft 365 E3' },
    { key: 'f1', text: 'Microsoft 365 F1' }
  ];

  
const skuTypeOptions: IDropdownOption[] = [
    { key: 't1', text: 'USL' },
    { key: 't2', text: 'USL 2' },
  ];
class SkuForm extends Component {
  render() {
    return (
        <Stack horizontal tokens={stackTokens}  padding={10}>
            <Stack.Item>
               {this.props.num >0 && <IconButton iconProps={{ iconName: 'ErrorBadge' }} title="Emoji" ariaLabel="Emoji" onClick={this.props.callbackFromParent} />   }
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal wrap tokens={stackTokens} >
                    <Stack.Item align="stretch" grow >
                        <Dropdown placeholder=""  options={options} styles={dropdownStyles} />
                    </Stack.Item>
                </Stack>
                <Stack horizontal wrap tokens={stackTokens} >
                    <Stack.Item align="start">
                    <TextField label="Year 1 seats" />
                    </Stack.Item>
                    <Stack.Item align="start">
                        <TextField label="Year 2 seats" />
                    </Stack.Item>
                    <Stack.Item align="start">
                        <TextField label="Year 3 seats" />
                    </Stack.Item>
                    <Stack.Item align="start">
                        <TextField label="Price per Month" />
                    </Stack.Item>
                    <Stack.Item align="start">
                        <Dropdown placeholder="Sku type" label="Sku type" options={skuTypeOptions} styles={dropdownStyles} />
                    </Stack.Item>
                </Stack>
            </Stack.Item>
         
         
         
        </Stack>
       
      
    );
  }
}

export default SkuForm;