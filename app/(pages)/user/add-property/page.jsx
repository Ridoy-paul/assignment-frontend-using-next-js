import PropertyInput from '@/app/components/Property/PropertyInput';

export const metadata = {
    title: "Add New Property",
};

export default function AddProperty() {
    return (
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Add New Property</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <PropertyInput />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
