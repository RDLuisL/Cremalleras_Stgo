gsap.to('#wheel-left, #wheel-right', { rotation: '25', transformOrigin: 'center center', yoyo: true, repeat: -1, duration: 1, ease: 'none' })
gsap.to('#arm-left, #arm-right', { rotation: '25', transformOrigin: 'bottom center', yoyo: true, repeat: -1, duration: 1, ease: 'none' })
gsap.to('#steering-wheel-linear', { autoAlpha: 0, yoyo: true, repeat: -1, duration: 1 })
gsap.to('#steering-wheel-turn', { autoAlpha: 1, yoyo: true, repeat: -1, duration: 1 })
