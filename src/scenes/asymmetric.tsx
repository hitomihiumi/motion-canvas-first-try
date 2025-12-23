import {Circle, Rect, Icon, Line, Grid, makeScene2D, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInBack, easeOutBack, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const window = createRef<Rect>();
    const title = createRef<Txt>();
    const content = createRef<Rect>();
    const lock = createRef<Icon>();
    const lock2 = createRef<Icon>();
    const keyGreen = createRef<Icon>();
    const keyRed = createRef<Icon>();
    const key2 = createRef<Icon>();
    const skull = createRef<Icon>();

    view.add(
        <Rect
            ref={window}
        >
            <Txt
                fontSize={128}
                fill={'#ffffff'}
                text={'Asymmetric'}
                fontFamily={'Source Code Pro'}
                fontWeight={600}
                ref={title}
                zIndex={1}
            />
            <Rect
                ref={content}
                opacity={0}
            >
                <Rect
                    fill={'#540000'}
                    height={1080}
                    width={900}
                >
                </Rect>
                <Rect
                    fill={'#141414'}
                    height={200}
                    width={900}
                    y={-450}
                >
                </Rect>
                <Icon
                    icon={'material-symbols:key-vertical-rounded'}
                    size={100}
                    color={'red'}
                    rotation={180}
                    x={-770}
                    y={150}
                    ref={keyRed}
                />
                <Icon
                    icon={'material-symbols:key-vertical-rounded'}
                    size={100}
                    color={'green'}
                    rotation={180}
                    x={-690}
                    y={150}
                    ref={keyGreen}
                />
                <Icon
                    ref={lock}
                    icon={'material-symbols:lock-open-rounded'}
                    size={150}
                    x={730}
                />
                <Icon
                    ref={lock2}
                    icon={'material-symbols:lock'}
                    size={150}
                    x={730}
                    opacity={0}
                />
                <Icon
                    icon={'material-symbols:skull'}
                    size={150}
                    y={-70}
                    opacity={0}
                    ref={skull}
                />
                <Icon
                    icon={'material-symbols:key-vertical-rounded'}
                    size={100}
                    color={'gold'}
                    rotation={270}
                    y={150}
                    opacity={0}
                    ref={key2}
                />
            </Rect>
        </Rect>
    );

    window().opacity(0).scale(0.5);

    yield* all(
        window().opacity(1, 0.5),
        window().scale(1, 0.5, easeOutBack)
    )

    yield* waitFor(1);

    yield* all(
        title().scale(0.5, 0.5, easeInBack),
        title().y(-450, 0.5, easeInBack),
    )

    yield* chain(
        content().opacity(1, 0.5),
        keyGreen().rotation(270, 0.5),
        keyGreen().x(730, 1),
        keyGreen().rotation(180, 0.5),
        keyGreen().y(70, 0.5),
        all(
            lock2().opacity(1, 0.5),
            lock().opacity(0, 0.75),
        ),
        keyGreen().y(150, 0.5),
        all(
            lock().x(-730, 1),
            lock2().x(-730, 1),
        ),
        all(
            keyRed().x(-730, 0.25),
            keyRed().y(70, 0.5),
        ),
        all(
            lock2().opacity(0, 0.75),
            lock().opacity(1, 0.5),
        ),
    )
});