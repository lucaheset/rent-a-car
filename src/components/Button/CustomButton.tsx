import { Button } from '@mui/material'


const CustomButton = ({ message }: { message: string }) => {
  return <Button variant="contained">{message}</Button>;
};

export default CustomButton