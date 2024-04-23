
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-1gfk4e7z6v',
  shadow: true,
})
export class C1gfk4e7z6v {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  