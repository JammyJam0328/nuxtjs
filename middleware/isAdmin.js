export default function({ $auth, redirect }) {
    let role = $auth.user.role
    if (role !== 'admin') {
        return redirect('/controller/redirect')
    }
}