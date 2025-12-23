import {Circle, Rect, Icon, Line, Grid, makeScene2D, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInBack, easeOutBack, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const window = createRef<Rect>();
    const content = createRef<Rect>();
    const title = createRef<Txt>();
    const dvBox = createRef<Rect>();
    const ovBox = createRef<Rect>();
    const evBox = createRef<Rect>();
    const cmd = createRef<Rect>()
    const linecmd = createRef<Txt>()
    const output = createRef<Txt>()

    view.add(
        <Rect
            opacity={0}
            ref={window}
        >
            <Txt
                fontSize={128}
                fill={'#ffffff'}
                text={'SSL Types'}
                fontFamily={'Source Code Pro'}
                fontWeight={600}
                ref={title}
                zIndex={1}
            />
            <Rect
                fill={'#1e1e1e'}
                radius={12}
                width={800}
                height={300}
                ref={cmd}
                layout
                justifyContent={'start'}
                alignItems={'start'}
                direction={'column'}
                y={100}
                opacity={0}
            >
                <Rect
                    fill={'#252525'}
                    radius={12}
                    height={64}
                    width={800}
                    layout
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Rect
                        marginLeft={12}
                        gap={6}
                    >
                        <Icon
                            icon={'material-symbols:expand-circle-down'}
                            size={32}
                            opacity={0}
                        />
                        <Icon
                            icon={'material-symbols:x-circle'}
                            size={32}
                            opacity={0}
                        />
                    </Rect>
                    <Txt
                        fontSize={32}
                        fill={'#ffffff'}
                        text={'cmd'}
                        fontFamily={'Source Code Pro'}
                        paddingLeft={12}
                    />
                    <Rect
                        marginRight={12}
                        gap={6}
                    >
                        <Icon
                            icon={'material-symbols:expand-circle-down'}
                            size={32}
                        />
                        <Icon
                            icon={'material-symbols:x-circle'}
                            size={32}
                        />
                    </Rect>
                </Rect>
                <Rect
                    direction={'column'}
                    gap={8}
                >
                    <Rect>
                        <Txt
                            fontSize={22}
                            fill={'#a1a1a1'}
                            text={'[hitomihiumi@archlinux ~]$'}
                            fontFamily={'Source Code Pro'}
                            paddingLeft={24}
                            paddingTop={24}
                            paddingRight={24}
                        />
                        <Txt
                            fontSize={22}
                            fill={'#ffffff'}
                            text={''}
                            fontFamily={'Source Code Pro'}
                            paddingRight={24}
                            paddingTop={24}
                            ref={linecmd}
                        />
                    </Rect>
                    <Txt
                        fontSize={22}
                        fill={'#00ff00'}
                        text={''}
                        fontFamily={'Source Code Pro'}
                        paddingLeft={24}
                        paddingBottom={24}
                        ref={output}
                    />
                </Rect>
            </Rect>
            <Rect
                ref={content}
                opacity={0}
            >
                <Rect
                    layout
                    fill={'#242424'}
                    padding={24}
                    radius={12}
                    gap={12}
                    direction={'column'}
                    ref={dvBox}
                    x={300}
                    y={20}
                    opacity={0}
                >
                    <Txt
                        fontSize={48}
                        fill={'#ffffff'}
                        text={'Domain Validation (DV)'}
                        fontFamily={'Source Code Pro'}
                    />
                    <Txt
                        fontSize={24}
                        fill={'#aaaaaa'}
                        text={'- Validates domain ownership\n- Issued quickly\n- Basic encryption'}
                        fontFamily={'Source Code Pro'}
                    />
                </Rect>
                <Rect
                    layout
                    fill={'#242424'}
                    padding={24}
                    radius={12}
                    gap={12}
                    direction={'column'}
                    ref={ovBox}
                    x={300}
                    y={20}
                    opacity={0}
                >
                    <Txt
                        fontSize={48}
                        fill={'#ffffff'}
                        text={'Organization Validation (OV)'}
                        fontFamily={'Source Code Pro'}
                    />
                    <Txt
                        fontSize={24}
                        fill={'#aaaaaa'}
                        text={'- Validates organization details\n- Takes longer to issue\n- Stronger trust'}
                        fontFamily={'Source Code Pro'}
                    />
                </Rect>
                <Rect
                    layout
                    fill={'#242424'}
                    padding={24}
                    radius={12}
                    gap={12}
                    direction={'column'}
                    ref={evBox}
                    x={300}
                    y={20}
                    opacity={0}
                >
                    <Txt
                        fontSize={48}
                        fill={'#ffffff'}
                        text={'Extended Validation (EV)'}
                        fontFamily={'Source Code Pro'}
                    />
                    <Txt
                        fontSize={24}
                        fill={'#aaaaaa'}
                        text={'- Rigorous validation process\n- Displays organization name in address bar\n- Highest level of trust'}
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

    yield* content().opacity(1, 0.5);

    yield* chain(
        all(
            dvBox().opacity(1, 0.5),
            dvBox().x(0, 0.5),
            dvBox().y(0, 0.5),
        ),
        waitFor(1),
        all(
            dvBox().x(-400, 0.5),
            dvBox().y(-250, 0.5),
            ovBox().opacity(1, 0.5),
            ovBox().x(0, 0.5),
            ovBox().y(0, 0.5),
        ),
        waitFor(1),
        all(
            ovBox().x(400, 0.5),
            ovBox().y(-250, 0.5),
            evBox().opacity(1, 0.5),
            evBox().x(0, 0.5),
            evBox().y(0, 0.5),
        ),
        waitFor(1),
        all(
            dvBox().opacity(0, 0.5),
            ovBox().opacity(0, 0.5),
            evBox().opacity(0, 0.5),
            dvBox().y(20, 0.5),
            ovBox().y(20, 0.5),
            evBox().y(240, 0.5),
        ),
        all(
            cmd().y(0, 0.5),
            cmd().opacity(1, 0.5),
        ),
        linecmd().text('sudo certbot --nginx', 0.5),
        waitFor(1),
        linecmd().fill('#a1a1a1', 0.5),
        output().text('Server: Successfully obtained certificate for domain \nexample.com', 1),
        waitFor(1)
    )
});