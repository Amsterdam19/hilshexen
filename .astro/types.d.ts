declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"noch-100-tage.md": {
	id: "noch-100-tage.md";
  slug: "noch-100-tage";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pause.md": {
	id: "pause.md";
  slug: "pause";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-1-kaierde-vogelbeck.md": {
	id: "tag-1-kaierde-vogelbeck.md";
  slug: "tag-1-kaierde-vogelbeck";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-10-von-oberhof-nach-neustadt-am-rennsteig.md": {
	id: "tag-10-von-oberhof-nach-neustadt-am-rennsteig.md";
  slug: "tag-10-von-oberhof-nach-neustadt-am-rennsteig";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-11-von-neustadt-am-rennsteig-nach-eisfeld.md": {
	id: "tag-11-von-neustadt-am-rennsteig-nach-eisfeld.md";
  slug: "tag-11-von-neustadt-am-rennsteig-nach-eisfeld";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-12-von-eisfeld-nach-roth-am-forst.md": {
	id: "tag-12-von-eisfeld-nach-roth-am-forst.md";
  slug: "tag-12-von-eisfeld-nach-roth-am-forst";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-13-von-roth-am-forst-nach-prächting.md": {
	id: "tag-13-von-roth-am-forst-nach-prächting.md";
  slug: "tag-13-von-roth-am-forst-nach-prächting";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-14-von-prächting-nach-wernsdorf.md": {
	id: "tag-14-von-prächting-nach-wernsdorf.md";
  slug: "tag-14-von-prächting-nach-wernsdorf";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-15-von-forchheim-nach-heroldsberg.md": {
	id: "tag-15-von-forchheim-nach-heroldsberg.md";
  slug: "tag-15-von-forchheim-nach-heroldsberg";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-15-von-wernsdorf-nach-forchheim.md": {
	id: "tag-15-von-wernsdorf-nach-forchheim.md";
  slug: "tag-15-von-wernsdorf-nach-forchheim";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-18-von-heroldsberg-nach-nürnberg.md": {
	id: "tag-18-von-heroldsberg-nach-nürnberg.md";
  slug: "tag-18-von-heroldsberg-nach-nürnberg";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-19-von-wendelstein-nach-hilpolstein.md": {
	id: "tag-19-von-wendelstein-nach-hilpolstein.md";
  slug: "tag-19-von-wendelstein-nach-hilpolstein";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-2-von-vogelbeck-nach-göttingen.md": {
	id: "tag-2-von-vogelbeck-nach-göttingen.md";
  slug: "tag-2-von-vogelbeck-nach-göttingen";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-20-hilpolstein➡️greding.md": {
	id: "tag-20-hilpolstein➡️greding.md";
  slug: "tag-20-hilpolstein️greding";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-21-greding➡️böhmfeld.md": {
	id: "tag-21-greding➡️böhmfeld.md";
  slug: "tag-21-greding️böhmfeld";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-3-von-göttingen-nach-weißenborn.md": {
	id: "tag-3-von-göttingen-nach-weißenborn.md";
  slug: "tag-3-von-göttingen-nach-weißenborn";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-4-von-weißenborn-nach-martinfeld.md": {
	id: "tag-4-von-weißenborn-nach-martinfeld.md";
  slug: "tag-4-von-weißenborn-nach-martinfeld";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-5-von-martinfeld-nach-treffurt.md": {
	id: "tag-5-von-martinfeld-nach-treffurt.md";
  slug: "tag-5-von-martinfeld-nach-treffurt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-7-von-stockhausen-nach-friedrichroda.md": {
	id: "tag-7-von-stockhausen-nach-friedrichroda.md";
  slug: "tag-7-von-stockhausen-nach-friedrichroda";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tag-8-von-friedrichroda-nach-tambach-dietharz.md": {
	id: "tag-8-von-friedrichroda-nach-tambach-dietharz.md";
  slug: "tag-8-von-friedrichroda-nach-tambach-dietharz";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"von-tambach-dietharz-nach-oberhof.md": {
	id: "von-tambach-dietharz-nach-oberhof.md";
  slug: "von-tambach-dietharz-nach-oberhof";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"von-treffurt-nach-stockhausen.md": {
	id: "von-treffurt-nach-stockhausen.md";
  slug: "von-treffurt-nach-stockhausen";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
