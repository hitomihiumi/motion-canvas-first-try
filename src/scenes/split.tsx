import {Circle, Rect, Icon, Line, Grid, makeScene2D, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInBack, easeOutBack, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const window = createRef<Rect>();
    const content = createRef<Rect>();
    const title = createRef<Txt>();
    const clientHello = createRef<Rect>();
    const serverHello = createRef<Rect>();
    const preMasterSecret = createRef<Rect>();
    const keyGreen = createRef<Icon>();
    const keyGreen2 = createRef<Icon>();
    const keyRed = createRef<Icon>();
    const secret = createRef<Rect>();
    const secret2 = createRef<Rect>();


    view.add(
        <Rect
            opacity={0}
            ref={window}
        >
            <Txt
                fontSize={128}
                fill={'#ffffff'}
                text={'TLS Handshake'}
                fontFamily={'Source Code Pro'}
                fontWeight={600}
                ref={title}
            />
            <Rect
                fill={'#242424'}
                padding={12}
                radius={12}
                ref={clientHello}
                layout
                x={-200}
                y={-50}
                opacity={0}
            >
                <Txt
                    fontSize={32}
                    fill={'#ffffff'}
                    text={'Client Hello'}
                    fontFamily={'Source Code Pro'}
                />
            </Rect>
            <Rect
                fill={'#242424'}
                padding={12}
                radius={12}
                ref={serverHello}
                layout
                x={200}
                y={70}
                direction={'column'}
                opacity={0}
            >
                <Txt
                    fontSize={32}
                    fill={'#ffffff'}
                    text={'Server Hello'}
                    fontFamily={'Source Code Pro'}
                />
                <Txt
                    fontSize={32}
                    fill={'#ffffff'}
                    text={'Certificate'}
                    fontFamily={'Source Code Pro'}
                />
            </Rect>
            <Icon
                icon={'material-symbols:key-vertical-rounded'}
                size={100}
                color={'red'}
                rotation={180}
                x={500}
                y={200}
                ref={keyRed}
                opacity={0}
            />
            <Icon
                icon={'material-symbols:key-vertical-rounded'}
                size={100}
                color={'green'}
                rotation={180}
                x={400}
                y={200}
                ref={keyGreen}
                opacity={0}
            />
            <Icon
                icon={'material-symbols:key-vertical-rounded'}
                size={100}
                color={'green'}
                rotation={180}
                x={-450}
                y={200}
                ref={keyGreen2}
                opacity={0}
            />
            <Rect
                fill={'#242424'}
                padding={12}
                radius={12}
                ref={preMasterSecret}
                layout
                x={-160}
                y={50}
                opacity={0}
            >
                <Txt
                    fontSize={32}
                    fill={'#ffffff'}
                    text={'Premaster Secret'}
                    fontFamily={'Source Code Pro'}
                />
            </Rect>
            <Rect
                fill={'#242424'}
                padding={12}
                radius={12}
                x={-450}
                y={-250}
                ref={secret}
                layout
                opacity={0}
            >
                <Txt
                    fontSize={32}
                    fill={'#ffffff'}
                    text={'Session Key'}
                    fontFamily={'Source Code Pro'}
                />
            </Rect>
            <Rect
                fill={'#242424'}
                padding={12}
                radius={12}
                x={450}
                y={-250}
                ref={secret2}
                layout
                opacity={0}
            >
                <Txt
                    fontSize={32}
                    fill={'#ffffff'}
                    text={'Session Key'}
                    fontFamily={'Source Code Pro'}
                />
            </Rect>
            <Rect
                ref={content}
                opacity={0}
                justifyContent={'center'}
                alignItems={'center'}
                gap={48}
                layout
            >
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
                    points={[[0, 0], [600, 0]]}
                    stroke={'grey'}
                    lineWidth={10}
                    lineCap={'round'}
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

    yield* all(
        content().opacity(1, 0.5),
        keyRed().opacity(1, 0.5),
        keyGreen().opacity(1, 0.5),
    )

    yield* waitFor(1);

    yield* chain(
        clientHello().opacity(1, 0.5),
        clientHello().x(200, 1),
        clientHello().fill('green', 0.5).to('#242424', 0.5),
        waitFor(1),
        serverHello().opacity(1, 0.5),
        serverHello().x(-200, 1),
        serverHello().fill('green', 0.5).to('#242424', 0.5),
        keyGreen2().opacity(1, 0.5),
        waitFor(1),
        all(
            clientHello().opacity(0, 0.5),
            serverHello().opacity(0, 0.5),
        ),
        all(
            secret().opacity(1, 0.5),
            secret().y(-200, 0.5)
        ),
        preMasterSecret().opacity(1, 0.5),
        all(
            keyGreen2().x(-160, 0.5),
            keyGreen2().y(85, 1),
        ),
        all(
            keyGreen2().x(-450, 1),
            keyGreen2().y(200, 0.5),
        ),
        preMasterSecret().x(200, 1),
        all(
            keyRed().x(200, 0.5),
            keyRed().y(85, 1),
        ),
        preMasterSecret().fill('green', 0.5).to('#242424', 0.5),
        all(
            preMasterSecret().opacity(0, 0.5),
            keyRed().x(500, 1),
            keyRed().y(200, 0.5),
        ),
        all(
            secret2().opacity(1, 0.5),
            secret2().y(-200, 0.5)
        )
    )
});