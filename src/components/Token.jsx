import { useRef, useState, useEffect } from "react";

function Token({ imgSrc, initialX = 0, initialY = 0, id, name, type}) {
    const [pos, setPos] = useState({x: initialX, y: initialY});
    const [offset, setOffset] = useState({x: 0, y: 0});
    const draggingRef = useRef(false);
    console.log("pos x: " + pos.x + " pos y: " + pos.y);

    // moving tokens
    const startDragging = (x, y) => {
        draggingRef.current = true;
        setOffset({
            x: x - pos.x,
            y: y - pos.y,
        });
    }

    const drag = (x, y) => {
        if(!draggingRef.current) return;
        setPos({
            x: x - offset.x,
            y: y - offset.y,
        });
    }

    const stopDragging = () => {
        draggingRef.current = false;
    }

    // move with mouse
    const handleMouseDown = (e) => {
        e.preventDefault();
        startDragging(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
        e.preventDefault();
        drag(e.clientX, e.clientY);
    };

    const handleMouseUp = (e) => {
        stopDragging();
    };

    // move with touchscreen
    const handleTouchDown = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        startDragging(touch.clientX, touch.clientY);
    }

    const handleTouchDrag = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        drag(touch.clientX, touch.clientY);
    }

    const handleStopTouch = (e) => {
        stopDragging();
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchDrag);
        document.addEventListener('touchend', handleStopTouch);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchDrag);
            document.removeEventListener('touchend', handleStopTouch);

        };
    }, [offset]);

    return (
        <img
            src={imgSrc}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchDown}
            draggable={false}
            style={{
                position: 'absolute',
                left: pos.x,
                top: pos.y,
                width: '20px',
                cursor: draggingRef.current ? 'grabbing' : 'grab',
                userSelect: 'none',
                zIndex: 10,
                touchAction: 'none'
            }}
            alt="Token"
        />
    );
}

export default Token;