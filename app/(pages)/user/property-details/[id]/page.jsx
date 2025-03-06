import { Link } from "@/app/components/Link";
import Image from 'next/image';
import { cookies } from 'next/headers'

const getPropertyData = async (id) => {
    try {
        const cookieStore = cookies()
        const token = cookieStore.get('authToken').value;

        const serverUrl = `${process.env.SERVER_BASE_URL}/get-property-item?id=${id}`;

        const response = await fetch(serverUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            cache: 'no-store',
        });

        console.log("Server Response: "+response);

        if (response.ok) {
            console.log("response ok");
            return await response.json();
        } else {
            console.error('Failed to fetch data');
            return null;
        }
    } catch (error) {
        console.error('Error fetching property data:', error);
        return null;
    }
}

export async function generateMetadata({ params, searchParams }, parent) {
  const noImgLink = '/assets/img/no-image.jpg';
  const { id } = params;
  const propertyMetaInfo = await getPropertyData(id);
  
  if (!propertyMetaInfo) {
    return {
      title: 'Property not found',
      description: 'This property is no longer available.',
      keywords: 'no data available',
      image: noImgLink,
      tags: []
    };
  }
  
  return {
    title: propertyMetaInfo?.name,
    description: propertyMetaInfo?.address,
    keywords: propertyMetaInfo?.meta_keywords,
    image: propertyMetaInfo?.image ? propertyMetaInfo.image : noImgLink,
    tags: propertyMetaInfo?.meta_tags, 
  };
}

export default async function PropertyDetails({ params }) {
  const noImgLink = '/assets/img/no-image.jpg';
  const id = params.id;
  const propertyItem = await getPropertyData(id);

  if (!propertyItem) {
    return (
      <div className="alert alert-danger" role="alert">
        Property not found or failed to load.
      </div>
    );
  }

  return (
    <div className="row">
        <div className="col-md-12">
            <div className="card shadow rounded border mb-4">
                <Image
                    src={propertyItem?.image ? propertyItem?.image : noImgLink}
                    className="card-img-top"
                    alt={propertyItem?.name}
                    width={600} // Set an explicit width for optimization
                    height={250} // Set an explicit height for optimization
                    layout="intrinsic"
                    loading="lazy"
                />
                <div className="card-body">
                    <h5>{propertyItem?.name}</h5>
                    <span>{propertyItem?.address}</span>
                    <div className="mt-2">
                        <strong>Cost per night: </strong>৳{propertyItem?.costPerNight}
                    </div>
                    <div className="mt-2">
                        <strong>Available rooms: </strong>{propertyItem?.availableRooms}
                    </div>
                    <div className="mt-2">
                        <strong>Avg. Rating: </strong>{propertyItem?.averageRating || 'Not rated'}
                    </div>

                    <div className="card-text" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: propertyItem?.descriptions }} />
                </div>
            </div>
        </div>
    </div>
  );
}
