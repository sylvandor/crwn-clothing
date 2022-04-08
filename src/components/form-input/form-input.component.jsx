import {FormInputLabel, Group, Input} from "./form-input.styles";

const FormInput = ({label, inputProps}) => (
  <Group>
    <Input {...inputProps}/>
    {label && <FormInputLabel shrink={inputProps.value.length}>{label}</FormInputLabel>}
  </Group>
)

export default FormInput;