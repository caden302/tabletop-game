import { useRef, useState, useEffect } from "react";


function Token({ imgSrc }) {
    const [pos, setPos] = useState({x: 0, y: 0});
    const [offset, setOffset] = useState({x: 0, y: 0});
    const draggingRef = useRef(false);
    console.log("pos x: " + pos.x + " pos y: " + pos.y);

    const handleMouseDown = (e) => {
        draggingRef.current = true;

        setOffset({
            x: e.clientX - pos.x,
            y: e.clientY - pos.y,
        });
        console.log("mouse x: " + e.clientX + " mouse y: " + e.clientY);
        console.log("pos x: " + pos.x + " pos y: " + pos.y);
    };

    const handleMouseMove = (e) => {
        if(!draggingRef.current) return;
        setPos({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    const handleMouseUp = (e) => {
        draggingRef.current = false;
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [offset]);

    return (
        <img
            src={imgSrc}
            onMouseDown={handleMouseDown}
            draggable={false}
            style={{
                position: 'absolute',
                left: pos.x,
                top: pos.y,
                width: '20px',
                cursor: draggingRef.current ? 'grabbing' : 'grab',
                userSelect: 'none',
                zIndex: 10,
            }}
            alt="Token"
        />
    );
}

export default Token;