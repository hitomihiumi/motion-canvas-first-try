import {Circle, Rect, Icon, Line, Grid, makeScene2D, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInBack, easeOutBack, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const window = createRef<Rect>();
    const title = createRef<Txt>();
    const content = createRef<Rect>();
    const cert = createRef<Icon>();
    const certRect = createRef<Rect>();
    const browser = createRef<Rect>();
    const shield = createRef<Icon>();
    const scanner = createRef<Line>();

    view.add(
        <Rect
        ref={window}>
            <Txt
                fontSize={128}
                fill={'#ffffff'}
                text={'Certificate Authority'}
                fontFamily={'Source Code Pro'}
                fontWeight={600}
                ref={title}
            />
            <Rect
                ref={content}
                opacity={0}
            >
                <Line
                    stroke={'#555555'}
                    lineWidth={4}
                    points={[[0, -150], [0, 150]]}
                    lineCap={'round'}
                    x={130}
                    ref={scanner}
                    zIndex={1}
                    opacity={0}
                />
                <Rect
                    fill={'#242424'}
                    radius={12}
                    padding={24}
                    gap={12}
                    alignItems={'center'}
                    width={190}
                    layout
                ref={certRect}>
                    <Rect
                        direction={'column'}
                        gap={12}
                        layout>
                        <Txt
                            fontSize={24}
                            fill={'#ffffff'}
                            text={'google.com'}
                            fontFamily={'Source Code Pro'}
                        />
                        <Txt
                            fontSize={24}
                            fill={'#ffffff'}
                            text={'Public Key'}
                            fontFamily={'Source Code Pro'}
                        />
                    </Rect>
                    <Icon
                        icon={'material-symbols:signature-rounded'}
                        size={48}
                        opacity={0}
                        ref={cert}
                    />
                </Rect>
                <Rect
                    fill={'#242424'}
                    radius={12}
                    padding={24}
                    gap={12}
                    alignItems={'center'}
                    x={-300}
                    opacity={0}
                    ref={browser}
                    layout
                >
                    <Rect
                        alignItems={'center'}
                        justifyContent={'center'}
                        gap={32}
                        direction={'row'}
                        layout
                    >
                        <Rect
                            gap={12}
                            direction={'row'}
                            layout
                        >
                            <Icon
                                icon={'material-symbols:arrow-back-rounded'}
                                size={32}
                            />
                            <Icon
                                icon={'material-symbols:arrow-forward-rounded'}
                                size={32}
                            />
                            <Icon
                                icon={'material-symbols:refresh-rounded'}
                                size={32}
                            />
                        </Rect>
                        <Rect
                            fill={'#141414'}
                            direction={'row'}
                            radius={6}
                            padding={8}
                            gap={12}
                            alignItems={'center'}
                            justifyContent={'center'}
                            layout
                        >
                            <Icon
                                icon={'material-symbols:shield-outline-rounded'}
                                size={32}
                                ref={shield}
                            />
                            <Rect>
                                <Txt
                                    fontSize={20}
                                    fill={'#a1a1a1'}
                                    text={'https://'}
                                    fontFamily={'Source Code Pro'}
                                />
                                <Txt
                                    fontSize={20}
                                    fill={'#ffffff'}
                                    text={'google.com'}
                                    fontFamily={'Source Code Pro'}
                                />
                                <Txt
                                    fontSize={20}
                                    fill={'#a1a1a1'}
                                    text={'/'}
                                    fontFamily={'Source Code Pro'}
                                />
                            </Rect>
                        </Rect>
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
        certRect().width(250, 0.5),
        cert().opacity(1, 0.5),
        waitFor(1),
        certRect().x(300, 1),
        all(
            browser().x(-200, 1),
            browser().opacity(1, 0.5),
        ),
        waitFor(1),
        scanner().opacity(0.5, 0.5),
        all(
            shield().color('lightgreen', 0.5).to('white', 0.5),
            scanner().x(460, 0.5).to(150, 0.5),
            scanner().stroke('white', 0.5).to('grey', 0.5)
        )
    )

    yield* waitFor(1);
});