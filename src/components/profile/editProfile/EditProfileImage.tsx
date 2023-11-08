import styles from './EditProfileImage.module.css'

type ComponentType = {
    profilName: string
}

const EditProfileImage: React.FC<ComponentType> = ({ profilName }) => {
    return (
        <>
            {profilName === 'kids' ? (
                <img
                    src="https://occ-0-5273-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcENEq3AWngawcvIFgivpRF0Wx5gW-LVuNdof8gYEbtGtft04ORrv_UDixUwcbH1PpV3k16HITdmAnDgXwneLsz2WZuyDuHk5Xpb.png?r=f55"
                    alt=""
                    className={styles.avatarImg}
                />
            ) : (
                <img
                    src="https://occ-0-5273-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                    alt=""
                    className={styles.avatarImg}
                />
            )}
        </>
    )
}

export default EditProfileImage
