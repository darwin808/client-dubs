const withAuth = (Component: any) => {
   const Auth = (props: any) => {
      console.log(props, "12312312312")
      // Login data added to props via redux-store (or use react context for example)
      // const { isLoggedIn } = props

      const user = false
      // If user is not logged in, return login component
      if (!user) {
         return <Login />
      }

      // If user is logged in, return original component
      return <Component {...props} />
   }

   // Copy getInitial props so it will run as well
   if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps
   }

   return Auth
}

export default withAuth

export const Login = () => {
   return <div className="h-screen w-full bg-yellow-50 text-4xl">login</div>
}
