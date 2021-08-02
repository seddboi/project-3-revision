import {useEffect, useState} from 'react';

function KeyTracking(start) {
    useEffect( () => {
        window.addEventListener('keydown', start);
        
        return () => window.removeEventListener('keydown', start);
    }, [start])
}

function AnimateWalk(frames) {

};

export {KeyTracking, AnimateWalk};