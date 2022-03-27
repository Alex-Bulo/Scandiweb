import styled from "styled-components";
import { Switcher } from "../../components/styledComponents";

export const CartOverlay = styled(Switcher)`
  width: 200px;
  height:100px;
  left: ${props => (props.x-180)+'px'};
  top:-10px;
`

