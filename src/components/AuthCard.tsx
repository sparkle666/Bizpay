import { ReactNode, FC } from 'react';
import Input from './Input';

interface AuthCardProps {
    children: ReactNode;
}

const AuthCard: FC<AuthCardProps> = ({ children }) => {
    return (
        <div className='w-[570px] bg-white rounded-sm px-10 py-8'>
            {children}
            <button className='btn bg-secondary'>Sign Up</button>
            <Input />
        </div>
    )
}

export default AuthCard