
import './App.css'
import { Profile } from './Profile/Profile'
import userData from "../Data/userData.json";
import "modern-normalize"
export function App() {
  return  (
  <Profile
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
  />
)
}
console.log(userData.avatar);