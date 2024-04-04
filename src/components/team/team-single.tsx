import React from 'react';
import Image from 'next/image';
import {ITeam} from '@/types/team-d-t';
import Link from 'next/link';

const TeamSingle = ({team, spacing}: { team: ITeam; spacing?: string }) => {
    return (
        <div className={`card-style-four ${spacing ? spacing : 'mt-35'}`}>
            <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
                <Image
                    src={team.img}
                    alt="team-img"
                    className="lazy-img w-100"
                    style={{height: 'auto'}}
                />
                <div className="round-btn-container d-flex align-items-center justify-content-center gap-2 tran3s">
                    <Link href={`tel:${team.phone}`}
                          className="round-btn rounded-circle d-flex align-items-center justify-content-center"
                    >
                        <i className="bi bi-telephone"></i>
                    </Link>
                    <Link href={`https://api.whatsapp.com/send?phone=${team.phone}&text=Hi%20${team.name}`}
                          className="round-btn rounded-circle d-flex align-items-center justify-content-center"
                    >
                        <i className="bi bi-whatsapp"></i>
                    </Link>
                    <Link href={`mailto:${team.email}`}
                          className="round-btn rounded-circle d-flex align-items-center justify-content-center"
                    >
                        <i className="bi bi-at"></i>
                    </Link>
                </div>
            </div>
            <h4 className="fw-500 pt-20 m0">{team.name}</h4>
            <div className="fs-6">{team.designation}</div>
        </div>
    );
};

export default TeamSingle;