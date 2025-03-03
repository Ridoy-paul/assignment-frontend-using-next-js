import LargeDeviceSidebar from "@/app/components/user/Large_device_sidebar";
import UserSmallDeviceSidebar from "@/app/components/user/Small_device_sidebar";

export const metadata = {
  title: "বাসা খুঁজুন  নিশ্চিন্তে | Tolet in Bangladesh",
  description: "Easily find and rent your ideal home in Bangladesh with our user-friendly dashboard and seamless experience.",
};

export default function RootLayout({ children }) {
  return (
    <>
        <UserSmallDeviceSidebar />
        <section className="getcom-user-body new-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-12">
                        <LargeDeviceSidebar />
                    </div>
                    <div className="col-lg-12 col-xl-9 col-12">
                        { children }
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
