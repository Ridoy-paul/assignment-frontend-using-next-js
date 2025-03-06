import { Image, Link, routes } from '@/app/components/Link';
import AllPropertyComponent from '@/app/components/Property/AllPropertyComponent';

export const metadata = {
    title: "All Properties",
};

export default function AllProperties() {
    return (
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3">All Properties</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <AllPropertyComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  