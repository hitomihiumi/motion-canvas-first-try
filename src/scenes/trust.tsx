import {Circle, Rect, Icon, Line, Grid, makeScene2D, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInBack, easeOutBack, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const window = createRef<Rect>();
    const title = createRef<Txt>();
    const content = createRef<Txt>();
    const line = createRef<Line>();
    const line2 = createRef<Line>();
    const lineFull = createRef<Line>();
    const key = createRef<Icon>();
    const req = createRef<Rect>();
    const hacker = createRef<Rect>()

    view.add(
        <Rect
            ref={window}
            >
            <Rect
                layout
                fill={'#242424'}
                padding={12}
                radius={12}
                ref={req}
                x={-300}
                y={-50}
                opacity={0}
            >
                <Txt
                    fontSize={30}
                    fill={'#ffffff'}
                    text={'POST /login'}
                    fontFamily={'Source Code Pro'}
                />
            </Rect>
            <Txt
                fontSize={128}
                fill={'#ffffff'}
                text={'Man-in-the-Middle'}
                fontFamily={'Source Code Pro'}
                fontWeight={600}
                ref={title}
            />
            <Rect
                ref={content}
            opacity={0}>
                <Line
                    points={[[0, 0], [800, 0]]}
                    stroke={'grey'}
                    lineWidth={15}
                    lineCap={'round'}
                    ref={lineFull}
                    x={-400}
                />
                <Rect
                    layout
                    direction={'column'}
                    alignItems={'center'}
                    opacity={0}
                    y={100}
                    ref={hacker}
                >
                    <Icon
                        icon={'material-symbols:skull'}
                        size={200}/>
                    <Txt
                        fontSize={48}
                        fill={'#ffffff'}
                        text={'Hacker'}
                        fontFamily={'Source Code Pro'}
                    />
                </Rect>
                <Icon
                    icon={'material-symbols:key-vertical-rounded'}
                    size={100}
                    color={'green'}
                    rotation={270}
                    x={-180}
                    y={45}
                    ref={key}
                    opacity={0}
                />
                <Rect
                    layout
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={48}>
                    <Rect
                        layout
                        direction={'column'}
                        alignItems={'center'}
                    >
                        <Icon
                            icon={'material-symbols:computer-outline'}
                            size={200}
                        />
                        <Txt
                            fontSize={48}
                            fill={'#ffffff'}
                            text={'Client'}
                            fontFamily={'Source Code Pro'}
                        />
                    </Rect>
                    <Line
                        points={[[0, 0], [250, 0]]}
                        stroke={'grey'}
                        lineWidth={15}
                        lineCap={'round'}
                        ref={line}
                        opacity={0}
                    />
                    <Rect
                        layout
                        direction={'column'}
                        alignItems={'center'}
                        opacity={0}
                    >
                        <Icon
                            icon={'material-symbols:skull'}
                            size={200}/>
                        <Txt
                            fontSize={48}
                            fill={'#ffffff'}
                            text={'Hacker'}
                            fontFamily={'Source Code Pro'}
                        />
                    </Rect>
                    <Line
                        points={[[0, 0], [250, 0]]}
                        stroke={'grey'}
                        lineWidth={15}
                        lineCap={'round'}
                        ref={line2}
                        opacity={0}
                    />
                    <Rect
                        layout
                        direction={'column'}
                        alignItems={'center'}
                    >
                        <Icon
                            icon={'material-symbols:globe'}
                            size={200}
                        />
                        <Txt
                            fontSize={48}
                            fill={'#ffffff'}
                            text={'Server'}
                            fontFamily={'Source Code Pro'}
                        />
                    </Rect>
                </Rect>
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

    yield* content().opacity(1, 0.5);

    yield* chain(
        req().opacity(1, 0.5),
        waitFor(0.5),
        all(
            req().x(-200, 1).to(-210, 0.25),
            req().fill('#ff0000', 1.5).to('#242424', 1),
            lineFull().opacity(0, 0.5),
            line().opacity(1, 0.5),
            line2().opacity(1, 0.5),
            hacker().opacity(1, 0.5),
            hacker().y(0, 1),
        ),
        req().opacity(0, 0.5),
        key().opacity(1, 0.5),
        key().x(-370, 1).to(-360, 0.25),
    )
});