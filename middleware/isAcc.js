export default function({ $auth, redirect }) {
    let role = $auth.user.role
    if (role !== 'accommodator') {
        return redirect('/controller/redirect')
    }
}