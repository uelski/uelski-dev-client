
interface EmailTemplateProps {
    message: string;
    email: string;
  }
  
  export function EmailTemplate({ message, email }: EmailTemplateProps) {
    return (
      <div>
        <h1>New Message!</h1>
        <p>Email: {email}</p>
        <p>Message: {message}</p>
      </div>
    );
  }