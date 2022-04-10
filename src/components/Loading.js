import { useEffect, useState } from 'react';

function Loading(){

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    },[])
    return (
        <>
            {loading ? (
                <div>
                    <br></br>
                    <div className="flex items-center justify-center">
                        <span className="mx-2">Loading...</span>
                        <div className="spinner-grow animate-spin inline-block w-8 h-8 border-4" role="status"></div>
                    </div>
                </div>

            ):(

                <br></br>
            )}
        </>
    )
}

export default Loading