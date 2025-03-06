'use client';
import PropertyInput from '@/app/components/Property/PropertyInput';
import { Link, NetworkCaller, Urls, } from '@/app/components/Link';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { SkeletonLoader } from '@/app/components/ClientLink';

export default function EditProperty({ params }) {
    const id = params.id;

    const [pageLoading, setPageLoading] = useState(true);
    const [propertyItem, setPropertyItem] = useState(null);
    const [error, setError] = useState(null);

    const networkCaller = new NetworkCaller();

    const getData = async () => {
        setPageLoading(true);
        try {
            const response = await networkCaller.getRequest(`${Urls.getPropertyItem()}?id=${id}`);
            console.log(response);

            if (response && response.isSuccess) {
                setPropertyItem(response.responseData);
            } else {
                setError('Failed to load property data.');
                toast.error('Failed to load property data.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while fetching property data.');
            toast.error('An error occurred while fetching property data.');
        } finally {
            setPageLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (pageLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Edit Property</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            {error ? (
                                <div className="alert alert-danger">{error}</div>
                            ) : (
                                <PropertyInput property={propertyItem} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
