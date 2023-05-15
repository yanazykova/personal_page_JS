import './index.scss';

function Animation({/*letterClass,*/ string}) {
    return (
        <span>
            {string
                // string.map((char, i) => (
                //     <span key={char +i} className={`${letterClass} _${i + idx}`}>
                //         {char}
                //     </span>
                // ))

            }
        </span>
    )
};

export default Animation;