
import MainLayout from '../layouts/MainLayout'
import Download from '../page_components/home/Download'
import Features from '../page_components/home/Features'
import Hero from '../page_components/home/Hero'
import Information from '../page_components/home/Information'
import InformationReverse from '../page_components/home/InformationReverse'
import Invite from '../page_components/home/Invite'
import Presentation from '../page_components/home/Presentation'

export default function Home() {
  return (
    <MainLayout title={"RotaCapital"}>
      <Hero />
      <Features />
      <Information />
      <Invite />
      <Presentation />
      <InformationReverse />
      <Download />
    </MainLayout>
  )
}
